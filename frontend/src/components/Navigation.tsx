import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home,
  Chat,
  Folder,
  Videocam,
  Login,
  Close
} from '@mui/icons-material';

const menuItems = [
  { label: 'Головна', path: '/', icon: <Home /> },
  { label: 'Чат', path: '/chat', icon: <Chat /> },
  { label: 'Документи', path: '/documents', icon: <Folder /> },
  { label: 'Конференції', path: '/conference', icon: <Videocam /> },
  { label: 'Вхід', path: '/login', icon: <Login /> }
];

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ 
        bgcolor: 'background.paper',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ 
              flexGrow: 1,
              background: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              cursor: 'pointer'
            }}
            onClick={() => navigate('/')}
          >
            ChatDev Platform
          </Typography>

          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={2}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  startIcon={item.icon}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                    borderBottom: location.pathname === item.path ? '2px solid' : 'none',
                    borderColor: 'primary.main',
                    borderRadius: 0
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2
          }}>
            <Typography variant="h6">Меню</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                selected={location.pathname === item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
}