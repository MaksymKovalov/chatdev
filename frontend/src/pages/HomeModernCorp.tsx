import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Stack,
  Card,
  CardContent,
  Chip,
  Avatar,
  AvatarGroup,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs
} from '@mui/material';
import {
  Chat,
  FolderShared,
  VideoCall,
  Shield,
  Check,
  ArrowForward,
  Business,
  Groups,
  Schedule,
  Insights,
  IntegrationInstructions,
  CloudDone
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HomeModernCorp() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const features = [
    {
      title: 'Чати та канали',
      desc: 'Організовані розмови для команд будь-якого розміру',
      icon: <Chat />,
      items: ['Приватні повідомлення', 'Публічні канали', 'Треди та реакції', 'Пошук по історії']
    },
    {
      title: 'Відеоконференції',
      desc: 'Зустрічі в один клік без встановлення додатків',
      icon: <VideoCall />,
      items: ['HD відео та аудіо', 'Демонстрація екрану', 'Запис зустрічей', 'Віртуальні фони']
    },
    {
      title: 'Документообіг',
      desc: 'Централізоване зберігання та спільна робота',
      icon: <FolderShared />,
      items: ['Версіонування файлів', 'Спільне редагування', 'Коментарі та обговорення', 'Інтеграція з Office']
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', background: '#F8F9FA' }}>
      {/* Navigation Bar */}
      <Box sx={{ 
        background: '#FFF',
        borderBottom: '1px solid #E1E4E8',
        py: 2,
        position: 'fixed',
        width: '100%',
        top: 64,
        zIndex: 10
      }}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#5E35B1' }}>
                WorkSpace Pro
              </Typography>
              <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button sx={{ color: '#5A6C7D' }}>Продукт</Button>
                <Button sx={{ color: '#5A6C7D' }}>Рішення</Button>
                <Button sx={{ color: '#5A6C7D' }}>Ціни</Button>
                <Button sx={{ color: '#5A6C7D' }}>Ресурси</Button>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button variant="text" sx={{ color: '#5A6C7D' }}>
                Увійти
              </Button>
              <Button 
                variant="contained" 
                sx={{ 
                  background: '#5E35B1',
                  textTransform: 'none',
                  '&:hover': { background: '#4527A0' }
                }}
              >
                Спробувати безкоштовно
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ pt: 20, pb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Stack spacing={3}>
                <Chip 
                  label="Trusted by Fortune 500"
                  sx={{ 
                    width: 'fit-content',
                    background: '#E8F5E9',
                    color: '#2E7D32',
                    fontWeight: 500
                  }}
                />
                
                <Typography variant="h2" sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  color: '#1A202C',
                  lineHeight: 1.2
                }}>
                  Робочий простір де команди
                  <Typography 
                    component="span" 
                    sx={{ 
                      color: '#5E35B1',
                      display: 'block'
                    }}
                  >
                    досягають більшого
                  </Typography>
                </Typography>

                <Typography variant="h6" sx={{
                  color: '#5A6C7D',
                  fontWeight: 400,
                  lineHeight: 1.6
                }}>
                  Об'єднайте людей, інструменти та процеси в єдиному
                  цифровому просторі для продуктивної роботи
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => navigate('/chat')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      background: '#5E35B1',
                      textTransform: 'none',
                      fontSize: '1rem',
                      '&:hover': { background: '#4527A0' }
                    }}
                  >
                    Почати безкоштовно
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderColor: '#5E35B1',
                      color: '#5E35B1',
                      textTransform: 'none',
                      fontSize: '1rem'
                    }}
                  >
                    Замовити демо
                  </Button>
                </Stack>

                <Stack direction="row" spacing={3} alignItems="center" sx={{ mt: 3 }}>
                  <AvatarGroup max={4}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#5E35B1' }}>A</Avatar>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#7E57C2' }}>B</Avatar>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#9575CD' }}>C</Avatar>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#B39DDB' }}>D</Avatar>
                  </AvatarGroup>
                  <Typography variant="body2" sx={{ color: '#5A6C7D' }}>
                    10,000+ команд вже працюють ефективніше
                  </Typography>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card sx={{ 
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                borderRadius: 3,
                overflow: 'visible'
              }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ 
                    background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
                    p: 3,
                    color: 'white'
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Workspace Dashboard
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            24
                          </Typography>
                          <Typography variant="caption">
                            Active Teams
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            156
                          </Typography>
                          <Typography variant="caption">
                            Members
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            89%
                          </Typography>
                          <Typography variant="caption">
                            Productivity
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  
                  <Box sx={{ p: 3 }}>
                    <List>
                      {['Marketing Team', 'Development', 'Design Squad', 'Sales Force'].map((team, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <Avatar sx={{ 
                              width: 32, 
                              height: 32, 
                              bgcolor: ['#5E35B1', '#00ACC1', '#43A047', '#FB8C00'][index],
                              fontSize: 14
                            }}>
                              {team[0]}
                            </Avatar>
                          </ListItemIcon>
                          <ListItemText 
                            primary={team}
                            secondary={`${12 + index * 3} members`}
                          />
                          <Chip 
                            label="Active" 
                            size="small" 
                            color="success"
                            variant="outlined"
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Features Tabs */}
      <Box sx={{ background: '#FFF', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ 
            textAlign: 'center',
            mb: 6,
            fontWeight: 600,
            color: '#1A202C'
          }}>
            Все що потрібно для роботи команди
          </Typography>

          <Tabs 
            value={tabValue} 
            onChange={(_, v) => setTabValue(v)}
            centered
            sx={{ mb: 6 }}
          >
            {features.map((feature, index) => (
              <Tab 
                key={index}
                label={feature.title}
                icon={feature.icon}
                iconPosition="start"
              />
            ))}
          </Tabs>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: '#1A202C' }}>
                  {features[tabValue].title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#5A6C7D', fontSize: '1.1rem' }}>
                  {features[tabValue].desc}
                </Typography>
                <List>
                  {features[tabValue].items.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <Check sx={{ color: '#4CAF50' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="text"
                  endIcon={<ArrowForward />}
                  sx={{ 
                    width: 'fit-content',
                    color: '#5E35B1',
                    textTransform: 'none'
                  }}
                >
                  Дізнатись більше
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                background: '#F8F9FA',
                borderRadius: 3,
                p: 4,
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {React.cloneElement(features[tabValue].icon, {
                  sx: { fontSize: 120, color: '#E0E0E0' }
                })}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {[
            { icon: <Business />, value: '500+', label: 'Компаній' },
            { icon: <Groups />, value: '50K+', label: 'Користувачів' },
            { icon: <CloudDone />, value: '99.9%', label: 'Uptime' },
            { icon: <Insights />, value: '40%', label: 'Зростання продуктивності' }
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card sx={{ 
                textAlign: 'center',
                p: 3,
                background: '#FFF',
                '&:hover': {
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}>
                {React.cloneElement(stat.icon, { 
                  sx: { fontSize: 40, color: '#5E35B1', mb: 2 } 
                })}
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#1A202C' }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: '#5A6C7D' }}>
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #5E35B1 0%, #7E57C2 100%)',
        py: 8,
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ 
            color: 'white',
            fontWeight: 600,
            mb: 3
          }}>
            Почніть працювати ефективніше вже сьогодні
          </Typography>
          <Typography variant="h6" sx={{ 
            color: 'rgba(255,255,255,0.9)',
            mb: 4,
            fontWeight: 300
          }}>
            Приєднуйтесь до тисяч команд, які вже трансформували свій робочий процес
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/login')}
              sx={{
                px: 4,
                py: 1.5,
                background: 'white',
                color: '#5E35B1',
                textTransform: 'none',
                fontSize: '1.1rem',
                '&:hover': {
                  background: '#F5F5F5'
                }
              }}
            >
              Почати безкоштовно
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderColor: 'white',
                color: 'white',
                textTransform: 'none',
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: 'white',
                  background: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Поговорити з експертом
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

import React from 'react';