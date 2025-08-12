import { useState } from 'react';
import {
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Avatar,
  AvatarGroup,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Fab,
  Badge,
  Tooltip,
  LinearProgress,
  Alert,
  InputAdornment,
  Switch,
  FormControlLabel
} from '@mui/material';
import {
  Videocam,
  VideocamOff,
  Mic,
  MicOff,
  ScreenShare,
  StopScreenShare,
  CallEnd,
  PersonAdd,
  Chat,
  PresentToAll,
  Settings,
  MoreVert,
  Fullscreen,
  FullscreenExit,
  VolumeUp,
  Groups,
  Schedule,
  Link,
  ContentCopy,
  CalendarMonth,
  Wallpaper,
  FiberManualRecord,
  GridOn,
  ViewAgenda,
  PushPin,
  Draw,
  EmojiEmotions,
  PanTool,
  ThumbUp,
  Celebration,
  QuestionMark
} from '@mui/icons-material';

interface Participant {
  id: string;
  name: string;
  avatar: string;
  isMuted: boolean;
  isVideoOff: boolean;
  isScreenSharing?: boolean;
  isPinned?: boolean;
  reaction?: string;
}

interface Conference {
  id: string;
  title: string;
  startTime: string;
  duration: string;
  participants: number;
  isRecording?: boolean;
  isScheduled?: boolean;
}

const mockParticipants: Participant[] = [
  {
    id: '1',
    name: 'Ви',
    avatar: 'В',
    isMuted: false,
    isVideoOff: false
  },
  {
    id: '2',
    name: 'Олександр Петренко',
    avatar: 'О',
    isMuted: true,
    isVideoOff: false,
    isPinned: true
  },
  {
    id: '3',
    name: 'Марія Коваленко',
    avatar: 'М',
    isMuted: false,
    isVideoOff: true
  },
  {
    id: '4',
    name: 'Андрій Шевченко',
    avatar: 'А',
    isMuted: true,
    isVideoOff: false,
    isScreenSharing: true
  }
];

const mockScheduledMeetings: Conference[] = [
  {
    id: '1',
    title: 'Щотижнева планерка',
    startTime: '10:00',
    duration: '30 хв',
    participants: 8,
    isScheduled: true
  },
  {
    id: '2',
    title: 'Презентація проекту',
    startTime: '14:00',
    duration: '1 год',
    participants: 15,
    isScheduled: true
  },
  {
    id: '3',
    title: 'Обговорення бюджету',
    startTime: '16:00',
    duration: '45 хв',
    participants: 5,
    isScheduled: true
  }
];

const reactions = [
  { icon: <ThumbUp />, label: '👍' },
  { icon: <Celebration />, label: '🎉' },
  { icon: <PanTool />, label: '✋' },
  { icon: <QuestionMark />, label: '❓' },
  { icon: <EmojiEmotions />, label: '😊' }
];

export default function ConferencePage() {
  const [inMeeting, setInMeeting] = useState(false);
  const [participants, setParticipants] = useState<Participant[]>(mockParticipants);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'speaker'>('grid');
  const [inviteDialog, setInviteDialog] = useState(false);
  const [scheduleDialog, setScheduleDialog] = useState(false);
  const [settingsDialog, setSettingsDialog] = useState(false);
  const [meetingLink] = useState('https://platform.com/meet/abc-def-ghi');
  const [virtualBg, setVirtualBg] = useState(false);
  const [noiseCancel, setNoiseCancel] = useState(true);
  const [autoCaption, setAutoCaption] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [scheduledMeetings] = useState<Conference[]>(mockScheduledMeetings);

  const handleJoinMeeting = () => {
    setInMeeting(true);
  };

  const handleLeaveMeeting = () => {
    setInMeeting(false);
    setIsRecording(false);
    setIsScreenSharing(false);
  };

  const handleReaction = (reaction: string) => {
    const updatedParticipants = [...participants];
    updatedParticipants[0].reaction = reaction;
    setParticipants(updatedParticipants);
    setTimeout(() => {
      updatedParticipants[0].reaction = undefined;
      setParticipants([...updatedParticipants]);
    }, 3000);
  };

  const ParticipantVideo = ({ participant, large = false }: { participant: Participant, large?: boolean }) => (
    <Paper
      sx={{
        position: 'relative',
        height: large ? 400 : 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        border: participant.isPinned ? '3px solid #6366f1' : 'none'
      }}
    >
      {participant.isVideoOff ? (
        <Avatar sx={{ width: 80, height: 80, bgcolor: '#6366f1' }}>
          {participant.avatar}
        </Avatar>
      ) : (
        <Box sx={{ 
          width: '100%', 
          height: '100%', 
          bgcolor: 'grey.800',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Typography color="text.secondary">Відео {participant.name}</Typography>
        </Box>
      )}
      
      {participant.isPinned && (
        <Chip
          icon={<PushPin />}
          label="Закріплено"
          size="small"
          sx={{ position: 'absolute', top: 8, left: 8 }}
        />
      )}
      
      {participant.isScreenSharing && (
        <Chip
          icon={<PresentToAll />}
          label="Демонструє екран"
          size="small"
          color="primary"
          sx={{ position: 'absolute', top: 8, right: 8 }}
        />
      )}
      
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: 'absolute',
          bottom: 8,
          left: 8,
          right: 8,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Chip
          label={participant.name}
          size="small"
          sx={{ bgcolor: 'rgba(0,0,0,0.7)' }}
        />
        <Stack direction="row" spacing={0.5}>
          {participant.isMuted && (
            <Avatar sx={{ width: 24, height: 24, bgcolor: 'error.main' }}>
              <MicOff sx={{ fontSize: 16 }} />
            </Avatar>
          )}
          {participant.isVideoOff && (
            <Avatar sx={{ width: 24, height: 24, bgcolor: 'error.main' }}>
              <VideocamOff sx={{ fontSize: 16 }} />
            </Avatar>
          )}
        </Stack>
      </Stack>
      
      {participant.reaction && (
        <Typography
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 48,
            animation: 'fadeInOut 3s'
          }}
        >
          {participant.reaction}
        </Typography>
      )}
    </Paper>
  );

  if (!inMeeting) {
    return (
      <Box sx={{ p: 3, minHeight: '100vh', bgcolor: 'background.default' }}>
        <Grid container spacing={3}>
          {/* New Meeting Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Stack spacing={3}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Нова конференція
                  </Typography>
                  
                  <Box sx={{ 
                    height: 300, 
                    bgcolor: 'grey.900',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <Avatar sx={{ width: 100, height: 100, bgcolor: '#6366f1' }}>
                      В
                    </Avatar>
                    
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                    >
                      <IconButton
                        color={isVideoOff ? 'error' : 'default'}
                        onClick={() => setIsVideoOff(!isVideoOff)}
                        sx={{ bgcolor: 'background.paper' }}
                      >
                        {isVideoOff ? <VideocamOff /> : <Videocam />}
                      </IconButton>
                      <IconButton
                        color={isMuted ? 'error' : 'default'}
                        onClick={() => setIsMuted(!isMuted)}
                        sx={{ bgcolor: 'background.paper' }}
                      >
                        {isMuted ? <MicOff /> : <Mic />}
                      </IconButton>
                      <IconButton sx={{ bgcolor: 'background.paper' }}>
                        <Settings />
                      </IconButton>
                    </Stack>
                  </Box>
                  
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Videocam />}
                      onClick={handleJoinMeeting}
                      fullWidth
                      sx={{ py: 1.5 }}
                    >
                      Почати конференцію
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<Schedule />}
                      onClick={() => setScheduleDialog(true)}
                      fullWidth
                      sx={{ py: 1.5 }}
                    >
                      Запланувати
                    </Button>
                  </Stack>
                  
                  <Divider />
                  
                  <TextField
                    fullWidth
                    placeholder="Введіть код конференції"
                    InputProps={{
                      endAdornment: (
                        <Button variant="text">Приєднатися</Button>
                      )
                    }}
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Scheduled Meetings */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Stack spacing={3}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Заплановані зустрічі
                    </Typography>
                    <Chip icon={<CalendarMonth />} label="Сьогодні" />
                  </Stack>
                  
                  <List>
                    {scheduledMeetings.map((meeting) => (
                      <ListItem key={meeting.id} sx={{ px: 0 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: '#6366f1' }}>
                            <Groups />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={meeting.title}
                          secondary={
                            <Stack direction="row" spacing={1}>
                              <Chip 
                                icon={<Schedule />} 
                                label={meeting.startTime} 
                                size="small" 
                              />
                              <Chip 
                                label={meeting.duration} 
                                size="small" 
                                variant="outlined"
                              />
                              <Chip 
                                icon={<Groups />} 
                                label={`${meeting.participants} учасників`} 
                                size="small" 
                                variant="outlined"
                              />
                            </Stack>
                          }
                        />
                        <ListItemSecondaryAction>
                          <Button 
                            variant="contained" 
                            size="small"
                            onClick={handleJoinMeeting}
                          >
                            Приєднатися
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                  
                  <Button fullWidth variant="text" startIcon={<CalendarMonth />}>
                    Переглянути календар
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Quick Actions */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Stack spacing={3}>
                <Typography variant="h6">Швидкі дії</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ textAlign: 'center', p: 2, cursor: 'pointer' }}>
                      <Videocam sx={{ fontSize: 40, color: '#6366f1', mb: 1 }} />
                      <Typography>Миттєва зустріч</Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ textAlign: 'center', p: 2, cursor: 'pointer' }}>
                      <Schedule sx={{ fontSize: 40, color: '#22d3ee', mb: 1 }} />
                      <Typography>Запланувати</Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ textAlign: 'center', p: 2, cursor: 'pointer' }}>
                      <ScreenShare sx={{ fontSize: 40, color: '#10b981', mb: 1 }} />
                      <Typography>Демонстрація</Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ textAlign: 'center', p: 2, cursor: 'pointer' }}>
                      <FiberManualRecord sx={{ fontSize: 40, color: '#ef4444', mb: 1 }} />
                      <Typography>Записати зустріч</Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      {/* Meeting Header */}
      <Paper sx={{ p: 2, borderRadius: 0 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h6">Щотижнева планерка</Typography>
            {isRecording && (
              <Chip
                icon={<FiberManualRecord sx={{ color: 'error.main' }} />}
                label="Запис"
                color="error"
                variant="outlined"
              />
            )}
            <Chip label="00:15:23" variant="outlined" />
          </Stack>
          
          <Stack direction="row" spacing={1}>
            <AvatarGroup max={4}>
              {participants.map((p) => (
                <Avatar key={p.id} sx={{ width: 32, height: 32 }}>
                  {p.avatar}
                </Avatar>
              ))}
            </AvatarGroup>
            <Button
              variant="outlined"
              size="small"
              startIcon={<PersonAdd />}
              onClick={() => setInviteDialog(true)}
            >
              Запросити
            </Button>
          </Stack>
        </Stack>
      </Paper>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Video Grid */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
          {viewMode === 'grid' ? (
            <Grid container spacing={2}>
              {participants.map((participant) => (
                <Grid item xs={12} sm={6} md={6} key={participant.id}>
                  <ParticipantVideo participant={participant} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Stack spacing={2}>
              <ParticipantVideo 
                participant={participants.find(p => p.isPinned) || participants[0]} 
                large 
              />
              <Stack direction="row" spacing={1}>
                {participants.filter(p => !p.isPinned).map((participant) => (
                  <Box key={participant.id} sx={{ width: 150 }}>
                    <ParticipantVideo participant={participant} />
                  </Box>
                ))}
              </Stack>
            </Stack>
          )}
        </Box>

        {/* Chat Sidebar */}
        {chatOpen && (
          <Paper sx={{ width: 320, p: 2, borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
            <Stack spacing={2} sx={{ height: '100%' }}>
              <Typography variant="h6">Чат конференції</Typography>
              <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>О</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Олександр"
                      secondary="Давайте почнемо з огляду завдань"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>М</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Марія"
                      secondary="Згодна, є питання по дедлайнах"
                    />
                  </ListItem>
                </List>
              </Box>
              <TextField
                fullWidth
                placeholder="Напишіть повідомлення..."
                size="small"
              />
            </Stack>
          </Paper>
        )}
      </Box>

      {/* Control Bar */}
      <Paper sx={{ p: 2, borderRadius: 0 }}>
        <Stack direction="row" justifyContent="center" spacing={2}>
          {/* Main Controls */}
          <Stack direction="row" spacing={1}>
            <Tooltip title={isMuted ? "Увімкнути мікрофон" : "Вимкнути мікрофон"}>
              <IconButton
                color={isMuted ? 'error' : 'default'}
                onClick={() => setIsMuted(!isMuted)}
                sx={{ 
                  bgcolor: isMuted ? 'error.main' : 'background.paper',
                  color: isMuted ? 'white' : 'text.primary',
                  '&:hover': {
                    bgcolor: isMuted ? 'error.dark' : 'action.hover'
                  }
                }}
              >
                {isMuted ? <MicOff /> : <Mic />}
              </IconButton>
            </Tooltip>
            
            <Tooltip title={isVideoOff ? "Увімкнути камеру" : "Вимкнути камеру"}>
              <IconButton
                color={isVideoOff ? 'error' : 'default'}
                onClick={() => setIsVideoOff(!isVideoOff)}
                sx={{ 
                  bgcolor: isVideoOff ? 'error.main' : 'background.paper',
                  color: isVideoOff ? 'white' : 'text.primary'
                }}
              >
                {isVideoOff ? <VideocamOff /> : <Videocam />}
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Завершити дзвінок">
              <IconButton
                onClick={handleLeaveMeeting}
                sx={{ 
                  bgcolor: 'error.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'error.dark' }
                }}
              >
                <CallEnd />
              </IconButton>
            </Tooltip>
          </Stack>

          <Divider orientation="vertical" flexItem />

          {/* Secondary Controls */}
          <Stack direction="row" spacing={1}>
            <Tooltip title={isScreenSharing ? "Зупинити демонстрацію" : "Демонструвати екран"}>
              <IconButton
                color={isScreenSharing ? 'primary' : 'default'}
                onClick={() => setIsScreenSharing(!isScreenSharing)}
              >
                {isScreenSharing ? <StopScreenShare /> : <ScreenShare />}
              </IconButton>
            </Tooltip>
            
            <Tooltip title={isRecording ? "Зупинити запис" : "Почати запис"}>
              <IconButton
                color={isRecording ? 'error' : 'default'}
                onClick={() => setIsRecording(!isRecording)}
              >
                <FiberManualRecord />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Чат">
              <IconButton onClick={() => setChatOpen(!chatOpen)}>
                <Badge badgeContent={2} color="primary">
                  <Chat />
                </Badge>
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Учасники">
              <IconButton>
                <Badge badgeContent={participants.length} color="primary">
                  <Groups />
                </Badge>
              </IconButton>
            </Tooltip>
            
            <ToggleButtonGroup
              value={viewMode}
              exclusive
              onChange={(_, value) => value && setViewMode(value)}
              size="small"
            >
              <ToggleButton value="grid">
                <GridOn />
              </ToggleButton>
              <ToggleButton value="speaker">
                <ViewAgenda />
              </ToggleButton>
            </ToggleButtonGroup>
            
            <Tooltip title={isFullscreen ? "Вийти з повноекранного режиму" : "Повноекранний режим"}>
              <IconButton onClick={() => setIsFullscreen(!isFullscreen)}>
                {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Налаштування">
              <IconButton onClick={() => setSettingsDialog(true)}>
                <Settings />
              </IconButton>
            </Tooltip>
          </Stack>

          <Divider orientation="vertical" flexItem />

          {/* Reactions */}
          <Stack direction="row" spacing={0.5}>
            {reactions.map((reaction, index) => (
              <Tooltip key={index} title={reaction.label}>
                <IconButton
                  size="small"
                  onClick={() => handleReaction(reaction.label)}
                >
                  {reaction.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
        </Stack>
      </Paper>

      {/* Invite Dialog */}
      <Dialog open={inviteDialog} onClose={() => setInviteDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Запросити учасників</DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email або ім'я"
              placeholder="Введіть email адреси через кому"
              multiline
              rows={3}
            />
            
            <Divider />
            
            <Stack spacing={2}>
              <Typography variant="subtitle2">Поділитися посиланням</Typography>
              <Stack direction="row" spacing={1}>
                <TextField
                  fullWidth
                  value={meetingLink}
                  InputProps={{ readOnly: true }}
                />
                <Button variant="outlined" startIcon={<ContentCopy />}>
                  Копіювати
                </Button>
              </Stack>
              
              <Alert severity="info">
                Будь-хто з посиланням може приєднатися до конференції
              </Alert>
            </Stack>
            
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Додати до Google Calendar"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setInviteDialog(false)}>Скасувати</Button>
          <Button variant="contained" onClick={() => setInviteDialog(false)}>
            Надіслати запрошення
          </Button>
        </DialogActions>
      </Dialog>

      {/* Schedule Dialog */}
      <Dialog open={scheduleDialog} onClose={() => setScheduleDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Запланувати конференцію</DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Назва зустрічі"
              placeholder="Наприклад: Щотижнева планерка"
            />
            
            <Stack direction="row" spacing={2}>
              <TextField
                fullWidth
                label="Дата"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label="Час"
                type="time"
                InputLabelProps={{ shrink: true }}
              />
            </Stack>
            
            <FormControl fullWidth>
              <InputLabel>Тривалість</InputLabel>
              <Select defaultValue="30">
                <MenuItem value="15">15 хвилин</MenuItem>
                <MenuItem value="30">30 хвилин</MenuItem>
                <MenuItem value="45">45 хвилин</MenuItem>
                <MenuItem value="60">1 година</MenuItem>
                <MenuItem value="90">1.5 години</MenuItem>
                <MenuItem value="120">2 години</MenuItem>
              </Select>
            </FormControl>
            
            <TextField
              fullWidth
              label="Учасники"
              placeholder="Введіть email адреси"
              multiline
              rows={2}
            />
            
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Повторювати щотижня"
            />
            
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Додати до Google Calendar"
            />
            
            <FormControlLabel
              control={<Switch />}
              label="Автоматично записувати"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setScheduleDialog(false)}>Скасувати</Button>
          <Button variant="contained" onClick={() => setScheduleDialog(false)}>
            Запланувати
          </Button>
        </DialogActions>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog open={settingsDialog} onClose={() => setSettingsDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Налаштування конференції</DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 2 }}>
            <Typography variant="subtitle2">Відео та аудіо</Typography>
            
            <FormControlLabel
              control={<Switch checked={virtualBg} onChange={(e) => setVirtualBg(e.target.checked)} />}
              label="Віртуальний фон"
            />
            
            <FormControlLabel
              control={<Switch checked={noiseCancel} onChange={(e) => setNoiseCancel(e.target.checked)} />}
              label="Придушення шуму"
            />
            
            <FormControlLabel
              control={<Switch checked={autoCaption} onChange={(e) => setAutoCaption(e.target.checked)} />}
              label="Автоматичні субтитри"
            />
            
            <Divider />
            
            <Typography variant="subtitle2">Безпека</Typography>
            
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Вимагати дозвіл на вхід"
            />
            
            <FormControlLabel
              control={<Switch />}
              label="Заблокувати конференцію"
            />
            
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Дозволити запис учасникам"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSettingsDialog(false)}>Закрити</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}