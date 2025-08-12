import { createClient } from 'redis';

export const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

export const connectRedis = async (): Promise<void> => {
  try {
    await redisClient.connect();
    console.log('Redis connected successfully');
  } catch (error) {
    console.error('Redis connection error:', error);
    throw error;
  }
};

redisClient.on('error', (error) => {
  console.error('Redis error:', error);
});

redisClient.on('disconnect', () => {
  console.log('Redis disconnected');
});