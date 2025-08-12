import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Stack,
  Divider,
  IconButton,
  InputAdornment,
  Alert,
  Checkbox,
  FormControlLabel,
  Link,
  Tab,
  Tabs,
  Chip,
  LinearProgress
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Fingerprint,
  Face,
  Key,
  Business,
  Google,
  Microsoft,
  Apple,
  Lock,
  Email,
  Smartphone,
  Security
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyDomain, setCompanyDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [biometricAvailable] = useState(true);
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [showTwoFactor, setShowTwoFactor] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setShowTwoFactor(true);
      setLoading(false);
    }, 1500);
  };

  const handleTwoFactor = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const handleBiometric = async () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Animation */}
      <Box sx={{
        position: 'absolute',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        animation: 'float 20s ease-in-out infinite'
      }} />
      <Box sx={{
        position: 'absolute',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle at 80% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
        animation: 'float 20s ease-in-out infinite reverse'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper sx={{ 
          p: 4,
          width: 450,
          position: 'relative',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          {loading && <LinearProgress sx={{ position: 'absolute', top: 0, left: 0, right: 0 }} />}
          
          <Stack spacing={3}>
            <Stack alignItems="center" spacing={2}>
              <Box sx={{
                width: 64,
                height: 64,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Lock sx={{ fontSize: 32, color: 'white' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Корпоративна платформа
              </Typography>
            </Stack>

            {!showTwoFactor ? (
              <>
                <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="fullWidth">
                  <Tab label="Особистий" />
                  <Tab label="Корпоративний" />
                </Tabs>

                {tab === 0 ? (
                  <>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email />
                          </InputAdornment>
                        )
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Пароль"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Key />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </>
                ) : (
                  <>
                    <TextField
                      fullWidth
                      label="Корпоративний домен"
                      placeholder="company.com"
                      value={companyDomain}
                      onChange={(e) => setCompanyDomain(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Business />
                          </InputAdornment>
                        )
                      }}
                    />
                    
                    <Alert severity="info">
                      Ви будете перенаправлені на сторінку SSO вашої компанії
                    </Alert>
                  </>
                )}

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Запам'ятати мене"
                  />
                  <Link href="#" variant="body2">
                    Забули пароль?
                  </Link>
                </Stack>

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleLogin}
                  disabled={loading}
                  sx={{ py: 1.5 }}
                >
                  {tab === 0 ? 'Увійти' : 'Увійти через SSO'}
                </Button>

                {tab === 0 && biometricAvailable && (
                  <>
                    <Divider>
                      <Chip label="АБО" size="small" />
                    </Divider>
                    
                    <Button
                      fullWidth
                      variant="outlined"
                      size="large"
                      startIcon={<Fingerprint />}
                      onClick={handleBiometric}
                      disabled={loading}
                      sx={{ py: 1.5 }}
                    >
                      Увійти з біометрією
                    </Button>

                    <Stack spacing={1}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<Face />}
                        sx={{ justifyContent: 'flex-start', pl: 3 }}
                      >
                        Увійти з Face ID
                      </Button>
                      
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<Smartphone />}
                        sx={{ justifyContent: 'flex-start', pl: 3 }}
                      >
                        Увійти з мобільного додатку
                      </Button>
                    </Stack>
                  </>
                )}

                {tab === 0 && (
                  <>
                    <Divider>
                      <Chip label="Соціальні мережі" size="small" />
                    </Divider>
                    
                    <Stack direction="row" spacing={1}>
                      <IconButton sx={{ 
                        border: '1px solid rgba(255,255,255,0.1)',
                        '&:hover': { borderColor: '#4285f4' }
                      }}>
                        <Google />
                      </IconButton>
                      <IconButton sx={{ 
                        border: '1px solid rgba(255,255,255,0.1)',
                        '&:hover': { borderColor: '#0078d4' }
                      }}>
                        <Microsoft />
                      </IconButton>
                      <IconButton sx={{ 
                        border: '1px solid rgba(255,255,255,0.1)',
                        '&:hover': { borderColor: '#fff' }
                      }}>
                        <Apple />
                      </IconButton>
                    </Stack>
                  </>
                )}
              </>
            ) : (
              <>
                <Stack alignItems="center" spacing={2}>
                  <Security sx={{ fontSize: 48, color: 'primary.main' }} />
                  <Typography variant="h6">
                    Двофакторна автентифікація
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="center">
                    Введіть 6-значний код з вашого додатку автентифікації
                  </Typography>
                </Stack>

                <TextField
                  fullWidth
                  label="Код підтвердження"
                  value={twoFactorCode}
                  onChange={(e) => setTwoFactorCode(e.target.value)}
                  placeholder="000000"
                  inputProps={{ 
                    maxLength: 6,
                    style: { textAlign: 'center', fontSize: 24, letterSpacing: 8 }
                  }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleTwoFactor}
                  disabled={loading || twoFactorCode.length !== 6}
                  sx={{ py: 1.5 }}
                >
                  Підтвердити
                </Button>

                <Button
                  fullWidth
                  variant="text"
                  onClick={() => setShowTwoFactor(false)}
                >
                  Повернутися
                </Button>

                <Divider />

                <Stack spacing={1}>
                  <Button variant="text" size="small">
                    Використати резервний код
                  </Button>
                  <Button variant="text" size="small">
                    Надіслати код на телефон
                  </Button>
                </Stack>
              </>
            )}

            {!showTwoFactor && (
              <Typography variant="body2" color="text.secondary" textAlign="center">
                Немає облікового запису?{' '}
                <Link href="#" sx={{ color: 'primary.main' }}>
                  Зареєструватися
                </Link>
              </Typography>
            )}
          </Stack>
        </Paper>
      </motion.div>
    </Box>
  );
}