import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import { connectDB } from '@/config/database';
import { connectRedis } from '@/config/redis';
import authRoutes from '@/routes/auth';
import chatRoutes from '@/routes/chat';
import documentRoutes from '@/routes/documents';
import { authenticateSocket } from '@/middleware/socketAuth';
import { ChatService } from '@/services/chat/chatService';
import { MediaService } from '@/services/media/mediaService';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/documents', documentRoutes);

// Socket.IO setup
io.use(authenticateSocket);

const chatService = new ChatService(io);
const mediaService = new MediaService(io);

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.userId}`);
  
  // Join user to their personal room
  socket.join(`user:${socket.userId}`);
  
  // Chat events
  socket.on('join-chat', (chatId) => chatService.joinChat(socket, chatId));
  socket.on('leave-chat', (chatId) => chatService.leaveChat(socket, chatId));
  socket.on('send-message', (data) => chatService.sendMessage(socket, data));
  socket.on('typing-start', (chatId) => chatService.handleTyping(socket, chatId, true));
  socket.on('typing-stop', (chatId) => chatService.handleTyping(socket, chatId, false));
  
  // Media events
  socket.on('call-user', (data) => mediaService.initiateCall(socket, data));
  socket.on('answer-call', (data) => mediaService.answerCall(socket, data));
  socket.on('ice-candidate', (data) => mediaService.handleIceCandidate(socket, data));
  socket.on('end-call', (data) => mediaService.endCall(socket, data));
  
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.userId}`);
    chatService.handleDisconnect(socket);
    mediaService.handleDisconnect(socket);
  });
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await connectDB();
    await connectRedis();
    
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();