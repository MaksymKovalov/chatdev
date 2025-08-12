import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Stack,
  Paper,
  Chip
} from '@mui/material';
import {
  Chat,
  Folder,
  VideoLibrary,
  Security,
  Speed,
  Cloud,
  ArrowRight,
  Star,
  TrendingUp,
  Bolt
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomeNeubrutalism() {
  const navigate = useNavigate();

  const BrutalCard = ({ children, color = '#FFE500', delay = 0 }: any) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02, rotate: -1 }}
    >
      <Box sx={{
        background: color,
        border: '4px solid #000',
        borderRadius: 0,
        p: 4,
        position: 'relative',
        boxShadow: '8px 8px 0px #000',
        transition: 'all 0.2s',
        '&:hover': {
          transform: 'translate(-4px, -4px)',
          boxShadow: '12px 12px 0px #000'
        }
      }}>
        {children}
      </Box>
    </motion.div>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: '#F5F5F5',
      pt: 10,
      fontFamily: '"Space Grotesk", sans-serif'
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{
                  display: 'inline-block',
                  background: '#FF6B6B',
                  border: '3px solid #000',
                  px: 3,
                  py: 1,
                  transform: 'rotate(-2deg)',
                  mb: 3
                }}>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 900,
                    color: '#000',
                    letterSpacing: 1
                  }}>
                    NEW PLATFORM 2025
                  </Typography>
                </Box>
              </motion.div>

              <Typography variant="h1" sx={{
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: 900,
                color: '#000',
                lineHeight: 0.9,
                textTransform: 'uppercase',
                letterSpacing: -3
              }}>
                Чат<br />
                <Box component="span" sx={{ color: '#FFE500' }}>
                  Платформа
                </Box><br />
                Майбутнього
              </Typography>

              <Typography variant="h5" sx={{
                color: '#000',
                fontWeight: 500,
                maxWidth: 500
              }}>
                Все що потрібно для командної роботи в одному місці
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Button
                  size="large"
                  onClick={() => navigate('/chat')}
                  sx={{
                    px: 4,
                    py: 2,
                    background: '#FFE500',
                    color: '#000',
                    border: '3px solid #000',
                    borderRadius: 0,
                    fontWeight: 900,
                    fontSize: '1.2rem',
                    boxShadow: '6px 6px 0px #000',
                    '&:hover': {
                      transform: 'translate(-3px, -3px)',
                      boxShadow: '9px 9px 0px #000',
                      background: '#FFE500'
                    }
                  }}
                >
                  СТАРТ →
                </Button>
                
                <Button
                  size="large"
                  sx={{
                    px: 4,
                    py: 2,
                    background: '#FFF',
                    color: '#000',
                    border: '3px solid #000',
                    borderRadius: 0,
                    fontWeight: 900,
                    fontSize: '1.2rem',
                    boxShadow: '6px 6px 0px #000',
                    '&:hover': {
                      transform: 'translate(-3px, -3px)',
                      boxShadow: '9px 9px 0px #000',
                      background: '#FFF'
                    }
                  }}
                >
                  ДЕМО
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <BrutalCard color="#FFE500">
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Chat sx={{ fontSize: 40 }} />
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 900 }}>
                      MEGA CHAT
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Unlimited messages
                    </Typography>
                  </Box>
                </Stack>
              </BrutalCard>

              <BrutalCard color="#FF6B6B" delay={0.1}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <VideoLibrary sx={{ fontSize: 40 }} />
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 900 }}>
                      VIDEO CALLS
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      100+ participants
                    </Typography>
                  </Box>
                </Stack>
              </BrutalCard>

              <BrutalCard color="#4ECDC4" delay={0.2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Folder sx={{ fontSize: 40 }} />
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 900 }}>
                      SMART DOCS
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Version control
                    </Typography>
                  </Box>
                </Stack>
              </BrutalCard>
            </Stack>
          </Grid>
        </Grid>

        {/* Stats Section */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {[
            { value: '99.9%', label: 'UPTIME', color: '#FFE500' },
            { value: '256-bit', label: 'SECURITY', color: '#FF6B6B' },
            { value: '<50ms', label: 'SPEED', color: '#4ECDC4' },
            { value: '24/7', label: 'SUPPORT', color: '#95E1D3' }
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Box sx={{
                  background: stat.color,
                  border: '4px solid #000',
                  p: 3,
                  textAlign: 'center',
                  boxShadow: '6px 6px 0px #000',
                  '&:hover': {
                    transform: 'rotate(-2deg)'
                  }
                }}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 900,
                    color: '#000'
                  }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 700,
                    color: '#000',
                    letterSpacing: 2
                  }}>
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Features */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{
            fontWeight: 900,
            textAlign: 'center',
            mb: 6,
            textTransform: 'uppercase',
            fontSize: { xs: '2.5rem', md: '4rem' }
          }}>
            Фічі що
            <Box component="span" sx={{
              display: 'inline-block',
              background: '#FFE500',
              border: '3px solid #000',
              px: 2,
              mx: 2,
              transform: 'rotate(-1deg)'
            }}>
              Вражають
            </Box>
          </Typography>

          <Grid container spacing={3}>
            {[
              { icon: <Bolt />, title: 'ШВИДКО', desc: 'Як блискавка', color: '#FFE500' },
              { icon: <Security />, title: 'БЕЗПЕЧНО', desc: 'Максимальний захист', color: '#FF6B6B' },
              { icon: <Cloud />, title: 'ХМАРНО', desc: 'Доступ звідусіль', color: '#4ECDC4' },
              { icon: <Star />, title: 'ЗРУЧНО', desc: 'Простий інтерфейс', color: '#95E1D3' },
              { icon: <TrendingUp />, title: 'ЕФЕКТИВНО', desc: 'Підвищує продуктивність', color: '#FFA07A' },
              { icon: <Speed />, title: 'ПОТУЖНО', desc: 'Без обмежень', color: '#FFD93D' }
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <BrutalCard color={feature.color} delay={index * 0.1}>
                  <Stack spacing={2} textAlign="center" alignItems="center">
                    <Box sx={{
                      width: 80,
                      height: 80,
                      background: '#000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {React.cloneElement(feature.icon, { 
                        sx: { fontSize: 50, color: feature.color } 
                      })}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 900 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {feature.desc}
                    </Typography>
                  </Stack>
                </BrutalCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA */}
        <Box sx={{
          background: '#000',
          border: '4px solid #000',
          p: 6,
          mb: 8,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Box sx={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 200,
            height: 200,
            background: '#FFE500',
            borderRadius: '50%'
          }} />
          
          <Typography variant="h2" sx={{
            color: '#FFF',
            fontWeight: 900,
            mb: 3,
            textTransform: 'uppercase',
            position: 'relative',
            zIndex: 1
          }}>
            Не гай час!
          </Typography>
          
          <Typography variant="h5" sx={{
            color: '#FFF',
            mb: 4,
            position: 'relative',
            zIndex: 1
          }}>
            Приєднуйся до революції спілкування
          </Typography>
          
          <Button
            size="large"
            onClick={() => navigate('/login')}
            sx={{
              px: 6,
              py: 2,
              background: '#FFE500',
              color: '#000',
              border: '3px solid #FFE500',
              borderRadius: 0,
              fontWeight: 900,
              fontSize: '1.5rem',
              position: 'relative',
              zIndex: 1,
              '&:hover': {
                background: '#FFF',
                borderColor: '#FFF'
              }
            }}
          >
            ПОГНАЛИ! →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

import React from 'react';