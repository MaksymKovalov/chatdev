import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Blur,
  Square,
  MinimizeOutlined,
  Business
} from '@mui/icons-material';

const designs = [
  {
    id: 'glassmorphism',
    title: 'Glassmorphism',
    description: 'Прозорі елементи з blur ефектом, м\'які градієнти',
    icon: <Blur />,
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['Сучасний', 'Елегантний', 'iOS стиль']
  },
  {
    id: 'neubrutalism',
    title: 'Neubrutalism',
    description: 'Яскраві кольори, жирні обводки, асиметрія',
    icon: <Square />,
    color: '#FFE500',
    border: '4px solid #000',
    tags: ['Тренд 2025', 'Яскравий', 'Молодіжний']
  },
  {
    id: 'minimalist',
    title: 'Minimalist',
    description: 'Чистий дизайн, акцент на контенті',
    icon: <MinimizeOutlined />,
    color: '#FAFAFA',
    textColor: '#000',
    tags: ['Професійний', 'Чистий', 'Notion-style']
  },
  {
    id: 'modern',
    title: 'Modern Corporate',
    description: 'Корпоративний стиль як Slack/Teams',
    icon: <Business />,
    color: 'linear-gradient(135deg, #5E35B1 0%, #7E57C2 100%)',
    tags: ['Корпоративний', 'Надійний', 'Enterprise']
  }
];

export default function DesignSelector() {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      pt: 12,
      pb: 6
    }}>
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Оберіть дизайн
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600 }}>
              Ми підготували 4 різні варіанти дизайну. 
              Оберіть той, який найкраще підходить для вашої команди
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {designs.map((design) => (
              <Grid item xs={12} sm={6} md={6} key={design.id}>
                <Card sx={{
                  height: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }
                }}
                onClick={() => navigate(`/${design.id}`)}
                >
                  <Box sx={{
                    height: 200,
                    background: design.color,
                    border: design.border,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    {React.cloneElement(design.icon, {
                      sx: { 
                        fontSize: 80, 
                        color: design.textColor || 'white',
                        opacity: 0.9
                      }
                    })}
                    <Box sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      background: 'rgba(0,0,0,0.5)',
                      borderRadius: 20,
                      px: 2,
                      py: 0.5
                    }}>
                      <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                        PREVIEW
                      </Typography>
                    </Box>
                  </Box>
                  
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {design.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {design.description}
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        {design.tags.map((tag) => (
                          <Chip 
                            key={tag}
                            label={tag} 
                            size="small"
                            sx={{
                              background: 'rgba(99, 102, 241, 0.1)',
                              border: '1px solid rgba(99, 102, 241, 0.3)'
                            }}
                          />
                        ))}
                      </Stack>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: 2,
                          background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)'
                          }
                        }}
                      >
                        Переглянути
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Не можете обрати?
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/')}
              sx={{ px: 4 }}
            >
              Використати стандартний дизайн
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

import React from 'react';