import { useState } from 'react';
import {
  Box,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  TextField,
  IconButton,
  Divider,
  Chip,
  Stack,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
  Switch,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Select,
  FormControl,
  InputLabel,
  AppBar,
  Toolbar,
  Drawer,
  InputAdornment
} from '@mui/material';
import {
  Send,
  AttachFile,
  EmojiEmotions,
  Mic,
  Videocam,
  Phone,
  MoreVert,
  Search,
  Group,
  Lock,
  Timer,
  Edit,
  Delete,
  ContentCopy,
  Reply,
  AddReaction,
  Shield,
  NoEncryption,
  Schedule,
  Block,
  PersonAdd,
  Settings,
  Logout,
  Add
} from '@mui/icons-material';

interface Message {
  id: string;
  sender: string;
  content: string;
  time: string;
  isOwn: boolean;
  ephemeral?: boolean;
  ttl?: number;
  edited?: boolean;
  reactions?: string[];
}

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  type: 'private' | 'group' | 'channel';
  isEphemeral?: boolean;
  isSecure?: boolean;
}

const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Олександр Петренко',
    avatar: 'O',
    lastMessage: 'Документи готові до підпису',
    time: '10:30',
    unread: 2,
    type: 'private'
  },
  {
    id: '2',
    name: 'Команда розробки',
    avatar: 'К',
    lastMessage: 'Деплой заплановано на 15:00',
    time: '09:45',
    unread: 5,
    type: 'group',
    isSecure: true
  },
  {
    id: '3',
    name: 'HR відділ (Ефемерний)',
    avatar: 'H',
    lastMessage: 'Конфіденційна інформація...',
    time: 'Вчора',
    unread: 0,
    type: 'group',
    isEphemeral: true
  },
  {
    id: '4',
    name: 'Загальний канал',
    avatar: 'З',
    lastMessage: 'Вітаємо нових колег!',
    time: 'Вчора',
    unread: 0,
    type: 'channel'
  }
];

const mockMessages: Message[] = [
  {
    id: '1',
    sender: 'Олександр',
    content: 'Привіт! Як справи з проектом?',
    time: '10:00',
    isOwn: false
  },
  {
    id: '2',
    sender: 'Ви',
    content: 'Все добре, фініширую з документацією',
    time: '10:15',
    isOwn: true,
    edited: true
  },
  {
    id: '3',
    sender: 'Олександр',
    content: 'Документи готові до підпису',
    time: '10:30',
    isOwn: false,
    reactions: ['👍', '✅']
  }
];

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<Chat>(mockChats[0]);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [message, setMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [ephemeralEnabled, setEphemeralEnabled] = useState(false);
  const [ephemeralTime, setEphemeralTime] = useState('1h');
  const [copyDisabled, setCopyDisabled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: 'Ви',
        content: message,
        time: new Date().toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
        ephemeral: ephemeralEnabled,
        ttl: ephemeralEnabled ? parseInt(ephemeralTime) : undefined
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const ChatList = () => (
    <List sx={{ p: 0 }}>
      {mockChats.filter(chat => 
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).map(chat => (
        <ListItem 
          key={chat.id}
          button
          selected={selectedChat.id === chat.id}
          onClick={() => setSelectedChat(chat)}
          sx={{
            '&.Mui-selected': {
              bgcolor: 'rgba(99, 102, 241, 0.1)',
              borderLeft: '3px solid #6366f1'
            }
          }}
        >
          <ListItemAvatar>
            <Badge 
              badgeContent={chat.unread} 
              color="primary"
              invisible={chat.unread === 0}
            >
              <Avatar sx={{ 
                bgcolor: chat.isEphemeral ? '#ef4444' : 
                        chat.isSecure ? '#10b981' : '#6366f1' 
              }}>
                {chat.isEphemeral && <Timer />}
                {chat.isSecure && <Lock />}
                {!chat.isEphemeral && !chat.isSecure && chat.avatar}
              </Avatar>
            </Badge>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="subtitle1">{chat.name}</Typography>
                {chat.type === 'channel' && <Chip label="Канал" size="small" />}
              </Stack>
            }
            secondary={
              <Typography variant="body2" color="text.secondary" noWrap>
                {chat.lastMessage}
              </Typography>
            }
          />
          <Typography variant="caption" color="text.secondary">
            {chat.time}
          </Typography>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'background.default' }}>
      {/* Sidebar with chats */}
      <Drawer
        variant="persistent"
        open={drawerOpen}
        sx={{
          width: drawerOpen ? 320 : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
            borderRight: '1px solid rgba(255,255,255,0.1)'
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Чати
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Пошук..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
            <Stack direction="row" spacing={1}>
              <Chip 
                label="Усі" 
                color="primary" 
                variant="filled"
                size="small"
              />
              <Chip 
                label="Непрочитані" 
                variant="outlined"
                size="small"
              />
              <Chip 
                label="Групи" 
                variant="outlined"
                size="small"
              />
            </Stack>
          </Stack>
        </Box>
        <Divider />
        <ChatList />
        <Box sx={{ p: 2, mt: 'auto' }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Add />}
            sx={{ mb: 1 }}
          >
            Новий чат
          </Button>
        </Box>
      </Drawer>

      {/* Main chat area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Chat header */}
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar sx={{ 
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            px: 3
          }}>
            <Avatar sx={{ mr: 2, bgcolor: '#6366f1' }}>
              {selectedChat.avatar}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">
                {selectedChat.name}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="caption" color="text.secondary">
                  Онлайн
                </Typography>
                {selectedChat.isEphemeral && (
                  <Chip 
                    icon={<Timer />} 
                    label="Ефемерний" 
                    size="small" 
                    color="error"
                  />
                )}
                {selectedChat.isSecure && (
                  <Chip 
                    icon={<Lock />} 
                    label="Захищений" 
                    size="small" 
                    color="success"
                  />
                )}
              </Stack>
            </Box>
            <Stack direction="row" spacing={1}>
              <IconButton>
                <Phone />
              </IconButton>
              <IconButton>
                <Videocam />
              </IconButton>
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <MoreVert />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>

        {/* Messages area */}
        <Box sx={{ 
          flexGrow: 1, 
          overflow: 'auto',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
          {messages.map((msg) => (
            <Box
              key={msg.id}
              sx={{
                display: 'flex',
                justifyContent: msg.isOwn ? 'flex-end' : 'flex-start'
              }}
            >
              <Paper
                sx={{
                  p: 2,
                  maxWidth: '60%',
                  bgcolor: msg.isOwn ? 'primary.main' : 'background.paper',
                  borderRadius: 2,
                  position: 'relative',
                  ...(msg.ephemeral && {
                    border: '1px solid #ef4444',
                    '&::before': {
                      content: '"🔥"',
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      fontSize: '20px'
                    }
                  })
                }}
              >
                {!msg.isOwn && (
                  <Typography variant="caption" color="primary" sx={{ fontWeight: 600 }}>
                    {msg.sender}
                  </Typography>
                )}
                <Typography variant="body1">
                  {msg.content}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                  <Typography variant="caption" color="text.secondary">
                    {msg.time}
                  </Typography>
                  {msg.edited && (
                    <Typography variant="caption" color="text.secondary">
                      (редаговано)
                    </Typography>
                  )}
                  {msg.ephemeral && (
                    <Chip 
                      icon={<Timer />} 
                      label={`TTL: ${msg.ttl}h`} 
                      size="small"
                      color="error"
                      variant="outlined"
                    />
                  )}
                </Stack>
                {msg.reactions && (
                  <Stack direction="row" spacing={0.5} sx={{ mt: 1 }}>
                    {msg.reactions.map((reaction, i) => (
                      <Chip key={i} label={reaction} size="small" />
                    ))}
                  </Stack>
                )}
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Message input */}
        <Paper sx={{ p: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {ephemeralEnabled && (
            <Chip 
              icon={<Timer />} 
              label={`Ефемерні повідомлення: ${ephemeralTime}`} 
              onDelete={() => setEphemeralEnabled(false)}
              color="error"
              sx={{ mb: 1 }}
            />
          )}
          {copyDisabled && (
            <Chip 
              icon={<Block />} 
              label="Копіювання заборонено" 
              onDelete={() => setCopyDisabled(false)}
              color="warning"
              sx={{ mb: 1, ml: 1 }}
            />
          )}
          <Stack direction="row" spacing={1}>
            <IconButton onClick={() => setSettingsOpen(true)}>
              <Shield />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <TextField
              fullWidth
              placeholder="Напишіть повідомлення..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              variant="outlined"
              size="small"
            />
            <IconButton>
              <EmojiEmotions />
            </IconButton>
            <IconButton>
              <Mic />
            </IconButton>
            <IconButton 
              color="primary" 
              onClick={handleSend}
              sx={{ 
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: 'primary.dark' }
              }}
            >
              <Send />
            </IconButton>
          </Stack>
        </Paper>
      </Box>

      {/* Settings menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>
          <PersonAdd sx={{ mr: 1 }} /> Додати учасника
        </MenuItem>
        <MenuItem>
          <Search sx={{ mr: 1 }} /> Пошук в чаті
        </MenuItem>
        <MenuItem>
          <Shield sx={{ mr: 1 }} /> Налаштування безпеки
        </MenuItem>
        <Divider />
        <MenuItem sx={{ color: 'error.main' }}>
          <Delete sx={{ mr: 1 }} /> Видалити чат
        </MenuItem>
      </Menu>

      {/* Security settings dialog */}
      <Dialog open={settingsOpen} onClose={() => setSettingsOpen(false)}>
        <DialogTitle>Налаштування безпеки чату</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 2, minWidth: 400 }}>
            <FormControlLabel
              control={
                <Switch 
                  checked={ephemeralEnabled}
                  onChange={(e) => setEphemeralEnabled(e.target.checked)}
                />
              }
              label="Ефемерні повідомлення"
            />
            {ephemeralEnabled && (
              <FormControl fullWidth size="small">
                <InputLabel>Час життя повідомлень</InputLabel>
                <Select
                  value={ephemeralTime}
                  onChange={(e) => setEphemeralTime(e.target.value)}
                  label="Час життя повідомлень"
                >
                  <MenuItem value="5m">5 хвилин</MenuItem>
                  <MenuItem value="1h">1 година</MenuItem>
                  <MenuItem value="24h">24 години</MenuItem>
                  <MenuItem value="7d">7 днів</MenuItem>
                </Select>
              </FormControl>
            )}
            <FormControlLabel
              control={
                <Switch 
                  checked={copyDisabled}
                  onChange={(e) => setCopyDisabled(e.target.checked)}
                />
              }
              label="Заборонити копіювання"
            />
            <FormControlLabel
              control={<Switch />}
              label="Заборонити скріншоти"
            />
            <FormControlLabel
              control={<Switch />}
              label="Заборонити пересилання"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="End-to-end шифрування"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSettingsOpen(false)}>Скасувати</Button>
          <Button onClick={() => setSettingsOpen(false)} variant="contained">
            Зберегти
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}