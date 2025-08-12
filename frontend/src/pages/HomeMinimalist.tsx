import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Stack,
  Chip,
  IconButton,
  Divider
} from '@mui/material';
import {
  MessageOutlined,
  FolderOutlined,
  VideocamOutlined,
  ShieldOutlined,
  ArrowForward,
  CheckCircleOutline,
  TrendingUp,
  AccessTime,
  People
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomeMinimalist() {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: '#FAFAFA',
      pt: 12
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 12 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Stack spacing={4}>
                <Typography 
                  variant="overline" 
                  sx={{ 
                    color: '#666',
                    letterSpacing: 2,
                    fontWeight: 500
                  }}
                >
                  КОРПОРАТИВНА ПЛАТФОРМА
                </Typography>

                <Typography 
                  variant="h1" 
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 300,
                    color: '#000',
                    lineHeight: 1.2,
                    '& strong': {
                      fontWeight: 600
                    }
                  }}
                >
                  Простір для <strong>ефективної</strong> командної роботи
                </Typography>

                <Typography 
                  variant="h6" 
                  sx={{
                    color: '#666',
                    fontWeight: 400,
                    lineHeight: 1.8,
                    maxWidth: 500
                  }}
                >
                  Об'єднайте спілкування, документи та відеозустрічі 
                  в одному зручному інтерфейсі
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => navigate('/chat')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      background: '#000',
                      borderRadius: 0,
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 500,
                      '&:hover': {
                        background: '#222'
                      }
                    }}
                  >
                    Почати безкоштовно
                  </Button>
                  
                  <Button
                    variant="text"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      color: '#000',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 500,
                      textDecoration: 'underline',
                      textUnderlineOffset: 4
                    }}
                  >
                    Дізнатись більше
                  </Button>
                </Stack>

                <Stack direction="row" spacing={4} sx={{ mt: 6 }}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 600, color: '#000' }}>
                      500+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      Компаній
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 600, color: '#000' }}>
                      50K+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      Користувачів
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 600, color: '#000' }}>
                      99.9%
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      Uptime
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Box sx={{
                background: '#FFF',
                border: '1px solid #E0E0E0',
                borderRadius: 2,
                p: 4,
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
              }}>
                <Stack spacing={3}>
                  {[
                    { icon: <MessageOutlined />, title: 'Миттєві повідомлення', desc: 'Швидка комунікація' },
                    { icon: <VideocamOutlined />, title: 'Відеоконференції', desc: 'HD якість зв\'язку' },
                    { icon: <FolderOutlined />, title: 'Спільні документи', desc: 'Версіонування файлів' },
                    { icon: <ShieldOutlined />, title: 'Повна безпека', desc: 'End-to-end шифрування' }
                  ].map((item, index) => (
                    <Box key={index}>
                      <Stack direction="row" spacing={3} alignItems="center">
                        <Box sx={{
                          width: 48,
                          height: 48,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: '#F5F5F5',
                          borderRadius: 1
                        }}>
                          {React.cloneElement(item.icon, { sx: { color: '#000' } })}
                        </Box>
                        <Box flex={1}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#000' }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#666' }}>
                            {item.desc}
                          </Typography>
                        </Box>
                        <CheckCircleOutline sx={{ color: '#4CAF50' }} />
                      </Stack>
                      {index < 3 && <Divider sx={{ mt: 3 }} />}
                    </Box>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box sx={{ mb: 12 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center',
              mb: 8,
              fontWeight: 300,
              color: '#000'
            }}
          >
            Все необхідне в <strong>одному місці</strong>
          </Typography>

          <Grid container spacing={6}>
            {[
              {
                icon: <People />,
                title: 'Командна робота',
                desc: 'Створюйте робочі простори для різних команд та проектів'
              },
              {
                icon: <AccessTime />,
                title: 'Економія часу',
                desc: 'Всі інструменти в одному місці - не потрібно перемикатись'
              },
              {
                icon: <TrendingUp />,
                title: 'Продуктивність',
                desc: 'Підвищте ефективність роботи на 40% з нашими інструментами'
              }
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Stack spacing={3}>
                    {React.cloneElement(feature.icon, { 
                      sx: { fontSize: 40, color: '#000' } 
                    })}
                    <Typography variant="h5" sx={{ fontWeight: 500, color: '#000' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8 }}>
                      {feature.desc}
                    </Typography>
                  </Stack>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonial */}
        <Box sx={{
          background: '#FFF',
          border: '1px solid #E0E0E0',
          borderRadius: 2,
          p: 6,
          mb: 12,
          textAlign: 'center'
        }}>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4,
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#000',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.8
            }}
          >
            "Ця платформа змінила спосіб роботи нашої команди. 
            Тепер всі процеси централізовані та ефективні."
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Box sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: '#F5F5F5'
            }} />
            <Box textAlign="left">
              <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#000' }}>
                Олександр Петренко
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                CEO, TechCorp
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* CTA */}
        <Box sx={{ 
          textAlign: 'center',
          py: 8,
          borderTop: '1px solid #E0E0E0'
        }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 300, color: '#000' }}>
            Готові спростити роботу?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#666' }}>
            Безкоштовний доступ на 14 днів. Без кредитної картки.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => navigate('/login')}
            sx={{
              px: 6,
              py: 2,
              background: '#000',
              borderRadius: 0,
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 500,
              '&:hover': {
                background: '#222'
              }
            }}
          >
            Розпочати
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

import React from 'react';