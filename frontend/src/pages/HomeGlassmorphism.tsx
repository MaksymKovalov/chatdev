import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Stack,
  Paper,
  Card,
  IconButton,
  Chip
} from '@mui/material';
import {
  ChatBubbleOutline,
  FolderOpen,
  VideoCall,
  Shield,
  Speed,
  Cloud,
  ArrowForward,
  PlayCircleOutline,
  CheckCircle,
  Groups,
  Schedule,
  Lock
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomeGlassmorphism() {
  const navigate = useNavigate();

  const GlassCard = ({ children, delay = 0 }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Box sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        borderRadius: 4,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        p: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        }
      }}>
        {children}
      </Box>
    </motion.div>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden',
      pt: 10
    }}>
      {/* Animated Background Orbs */}
      <Box sx={{
        position: 'absolute',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        top: -100,
        right: -100,
        animation: 'float 20s ease-in-out infinite'
      }} />
      <Box sx={{
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,126,234,0.3) 0%, transparent 70%)',
        bottom: -100,
        left: -100,
        animation: 'float 15s ease-in-out infinite reverse'
      }} />

      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={4}>
                <Chip 
                  icon={<CheckCircle />}
                  label="Trusted by 500+ Companies"
                  sx={{
                    width: 'fit-content',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white'
                  }}
                />
                
                <Typography variant="h1" sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1.1
                }}>
                  Спілкування нового покоління
                </Typography>
                
                <Typography variant="h6" sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: 300,
                  lineHeight: 1.6
                }}>
                  Об'єднайте команду в єдиному просторі для спілкування, 
                  роботи з документами та відеоконференцій
                </Typography>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => navigate('/chat')}
                    sx={{
                      px: 4,
                      py: 2,
                      background: 'rgba(255,255,255,0.9)',
                      color: '#667eea',
                      fontWeight: 600,
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        background: 'white'
                      }
                    }}
                  >
                    Спробувати безкоштовно
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayCircleOutline />}
                    sx={{
                      px: 4,
                      py: 2,
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.5)',
                      '&:hover': {
                        borderColor: 'white',
                        background: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    Дивитись демо
                  </Button>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <GlassCard delay={0.3}>
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{
                    width: 48,
                    height: 48,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}>
                    <ChatBubbleOutline />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Захищені чати
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      End-to-end шифрування
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{
                    width: 48,
                    height: 48,
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                  }}>
                    <VideoCall />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      HD Конференції
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      До 100 учасників
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{
                    width: 48,
                    height: 48,
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                  }}>
                    <FolderOpen />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Документообіг
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Версіонування та шаринг
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </GlassCard>
          </Grid>
        </Grid>

        {/* Features Grid */}
        <Grid container spacing={3} sx={{ mb: 10 }}>
          {[
            { icon: <Speed />, title: 'Швидкість', desc: 'Миттєві повідомлення', color: '#667eea' },
            { icon: <Shield />, title: 'Безпека', desc: '256-bit шифрування', color: '#764ba2' },
            { icon: <Cloud />, title: 'Хмара', desc: 'Доступ з будь-де', color: '#f093fb' },
            { icon: <Groups />, title: 'Команда', desc: 'Спільна робота', color: '#4facfe' },
            { icon: <Schedule />, title: 'Планування', desc: 'Календар зустрічей', color: '#00f2fe' },
            { icon: <Lock />, title: 'Приватність', desc: 'Ваші дані захищені', color: '#f5576c' }
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <GlassCard delay={index * 0.1}>
                <Stack spacing={2} alignItems="center" textAlign="center">
                  <Box sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${feature.color}40 0%, ${feature.color}20 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${feature.color}40`
                  }}>
                    {React.cloneElement(feature.icon, { 
                      sx: { fontSize: 40, color: 'white' } 
                    })}
                  </Box>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {feature.desc}
                  </Typography>
                </Stack>
              </GlassCard>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <GlassCard delay={0.6}>
          <Stack spacing={3} alignItems="center" textAlign="center" sx={{ py: 4 }}>
            <Typography variant="h3" sx={{ 
              color: 'white', 
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' }
            }}>
              Готові розпочати?
            </Typography>
            <Typography variant="h6" sx={{ 
              color: 'rgba(255,255,255,0.9)', 
              maxWidth: 600,
              fontWeight: 300
            }}>
              Приєднуйтесь до тисяч команд, які вже використовують нашу платформу
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/login')}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                background: 'white',
                color: '#667eea',
                fontWeight: 600,
                '&:hover': {
                  background: 'rgba(255,255,255,0.9)'
                }
              }}
            >
              Почати зараз
            </Button>
          </Stack>
        </GlassCard>
      </Container>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </Box>
  );
}

import { Avatar } from '@mui/material';