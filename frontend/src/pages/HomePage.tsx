import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card,
  CardContent,
  Stack,
  Chip,
  Avatar,
  AvatarGroup,
  Paper,
  IconButton
} from '@mui/material';
import {
  ChatBubbleOutline,
  FolderShared,
  VideocamOutlined,
  Security,
  Speed,
  Group,
  Fingerprint,
  CloudSync,
  CalendarMonth,
  Lock,
  DeleteSweep,
  Analytics,
  ArrowForward,
  PlayArrow
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: <ChatBubbleOutline sx={{ fontSize: 40 }} />,
    title: 'Захищені чати',
    description: 'End-to-end шифрування, ефемерні повідомлення, заборона копіювання',
    color: '#6366f1'
  },
  {
    icon: <VideocamOutlined sx={{ fontSize: 40 }} />,
    title: 'Відеоконференції',
    description: 'HD відео до 100 учасників, запис, віртуальні фони',
    color: '#22d3ee'
  },
  {
    icon: <FolderShared sx={{ fontSize: 40 }} />,
    title: 'Документообіг',
    description: 'Версіонування, спільний доступ, попередній перегляд',
    color: '#10b981'
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: 'Корпоративна безпека',
    description: 'SSO, 2FA, біометрія, аудит логування',
    color: '#f59e0b'
  },
  {
    icon: <DeleteSweep sx={{ fontSize: 40 }} />,
    title: 'Ефемерні чати',
    description: 'Автовидалення повідомлень за розкладом',
    color: '#ef4444'
  },
  {
    icon: <CalendarMonth sx={{ fontSize: 40 }} />,
    title: 'Інтеграція календаря',
    description: 'Google Calendar, планування зустрічей',
    color: '#8b5cf6'
  }
];

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '256-bit', label: 'Шифрування' },
  { value: '<50ms', label: 'Затримка' },
  { value: '24/7', label: 'Підтримка' }
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ pt: 10, pb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Chip 
              label="Enterprise Ready" 
              color="primary" 
              variant="outlined"
              icon={<Lock />}
            />
            
            <Typography variant="h1" sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Корпоративна платформа<br />нового покоління
            </Typography>
            
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800 }}>
              Безпечне спілкування, відеоконференції та документообіг в одній екосистемі.
              Повний контроль над даними вашої компанії.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                size="large"
                startIcon={<PlayArrow />}
                onClick={() => navigate('/login')}
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
                  }
                }}
              >
                Почати безкоштовно
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                endIcon={<ArrowForward />}
                sx={{ px: 4, py: 1.5 }}
              >
                Демо версія
              </Button>
            </Stack>

            <AvatarGroup max={5} sx={{ mt: 4 }}>
              <Avatar sx={{ bgcolor: '#6366f1' }}>А</Avatar>
              <Avatar sx={{ bgcolor: '#22d3ee' }}>М</Avatar>
              <Avatar sx={{ bgcolor: '#10b981' }}>О</Avatar>
              <Avatar sx={{ bgcolor: '#f59e0b' }}>К</Avatar>
              <Avatar sx={{ bgcolor: '#ef4444' }}>+</Avatar>
            </AvatarGroup>
            <Typography variant="body2" color="text.secondary">
              Понад 500+ компаній вже використовують нашу платформу
            </Typography>
          </Stack>
        </motion.div>
      </Container>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Features Grid */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 700 }}>
            Потужні можливості
          </Typography>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card sx={{ 
                    height: '100%',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: feature.color,
                      boxShadow: `0 0 30px ${feature.color}40`
                    }
                  }}>
                    <CardContent>
                      <Box sx={{ 
                        color: feature.color, 
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                      }}>
                        {feature.icon}
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Security Section */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Paper sx={{ 
            p: 6,
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Безпека корпоративного рівня
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Ваші дані захищені найсучаснішими технологіями шифрування.
                    Повна відповідність GDPR та стандартам безпеки.
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Fingerprint color="primary" />
                      <Typography>Біометрична автентифікація</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Lock color="primary" />
                      <Typography>End-to-end шифрування</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CloudSync color="primary" />
                      <Typography>Автоматичний бекап даних</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Analytics color="primary" />
                      <Typography>Аудит та моніторинг</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 300,
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)'
                }}>
                  <Security sx={{ fontSize: 150, color: '#6366f1', opacity: 0.5 }} />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Paper sx={{ 
            p: 6,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)'
          }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
              Готові до трансформації комунікацій?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Приєднуйтесь до сотень компаній, які вже використовують нашу платформу
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button 
                variant="contained" 
                size="large"
                onClick={() => navigate('/login')}
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  bgcolor: 'white',
                  color: '#6366f1',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)'
                  }
                }}
              >
                Розпочати зараз
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Зв'язатися з нами
              </Button>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}