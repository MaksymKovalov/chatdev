import { useState } from 'react';
import {
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
  Stack,
  Chip,
  Avatar,
  AvatarGroup,
  Breadcrumbs,
  Link,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  LinearProgress,
  Tooltip,
  Badge,
  FormControl,
  InputLabel,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Fab,
  Zoom
} from '@mui/material';
import {
  Folder,
  InsertDriveFile,
  Upload,
  Download,
  Share,
  Delete,
  Edit,
  History,
  Visibility,
  MoreVert,
  Search,
  GridView,
  ViewList,
  FilterList,
  Sort,
  CreateNewFolder,
  CloudUpload,
  Description,
  PictureAsPdf,
  Image,
  VideoFile,
  Archive,
  NavigateNext,
  PersonAdd,
  Lock,
  Public,
  Link as LinkIcon,
  ContentCopy,
  AccessTime,
  CheckCircle,
  Warning,
  Comment,
  RestorePage,
  FolderShared,
  Person,
  Group,
  Star,
  StarBorder
} from '@mui/icons-material';

interface Document {
  id: string;
  name: string;
  type: 'folder' | 'file';
  fileType?: string;
  size?: string;
  modified: string;
  owner: string;
  shared?: string[];
  starred?: boolean;
  version?: number;
  status?: 'synced' | 'syncing' | 'error';
  permissions?: 'view' | 'edit' | 'admin';
}

const mockDocuments: Document[] = [
  {
    id: '1',
    name: 'Особиста папка',
    type: 'folder',
    modified: '2 години тому',
    owner: 'Ви',
    starred: true,
    permissions: 'admin'
  },
  {
    id: '2',
    name: 'Спільні документи',
    type: 'folder',
    modified: 'Вчора',
    owner: 'Команда',
    shared: ['user1', 'user2', 'user3'],
    permissions: 'edit'
  },
  {
    id: '3',
    name: 'Презентація Q4 2024.pptx',
    type: 'file',
    fileType: 'presentation',
    size: '2.5 MB',
    modified: '1 година тому',
    owner: 'Ви',
    version: 3,
    status: 'synced',
    shared: ['user1'],
    permissions: 'admin'
  },
  {
    id: '4',
    name: 'Фінансовий звіт.xlsx',
    type: 'file',
    fileType: 'spreadsheet',
    size: '1.2 MB',
    modified: '3 години тому',
    owner: 'Фінансовий відділ',
    version: 5,
    status: 'synced',
    permissions: 'view'
  },
  {
    id: '5',
    name: 'Договір №2024-156.pdf',
    type: 'file',
    fileType: 'pdf',
    size: '450 KB',
    modified: 'Сьогодні',
    owner: 'Юридичний відділ',
    version: 2,
    status: 'syncing',
    permissions: 'view'
  }
];

const fileIcons: Record<string, JSX.Element> = {
  pdf: <PictureAsPdf color="error" />,
  image: <Image color="success" />,
  video: <VideoFile color="primary" />,
  archive: <Archive color="warning" />,
  presentation: <Description color="secondary" />,
  spreadsheet: <Description color="success" />,
  default: <InsertDriveFile />
};

export default function DocumentsPage() {
  const [documents] = useState<Document[]>(mockDocuments);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [shareDialog, setShareDialog] = useState(false);
  const [versionDialog, setVersionDialog] = useState(false);
  const [previewDialog, setPreviewDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentPath] = useState(['Мої документи']);
  const [searchQuery, setSearchQuery] = useState('');
  const [shareLink, setShareLink] = useState('');
  const [sharePermission, setSharePermission] = useState('view');

  const handleShare = (doc: Document) => {
    setSelectedDoc(doc);
    setShareDialog(true);
    setShareLink(`https://platform.com/share/${doc.id}`);
  };

  const handleVersionHistory = (doc: Document) => {
    setSelectedDoc(doc);
    setVersionDialog(true);
  };

  const handlePreview = (doc: Document) => {
    setSelectedDoc(doc);
    setPreviewDialog(true);
  };

  const getFileIcon = (doc: Document) => {
    if (doc.type === 'folder') {
      return doc.shared ? <FolderShared /> : <Folder />;
    }
    return fileIcons[doc.fileType || 'default'];
  };

  const DocumentCard = ({ doc }: { doc: Document }) => (
    <Card sx={{ 
      height: '100%',
      transition: 'all 0.3s',
      cursor: 'pointer',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 3
      }
    }}>
      <CardContent>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {getFileIcon(doc)}
              {doc.starred && <Star sx={{ color: 'warning.main', fontSize: 16 }} />}
            </Box>
            <IconButton size="small" onClick={(e) => {
              e.stopPropagation();
              setSelectedDoc(doc);
              setAnchorEl(e.currentTarget);
            }}>
              <MoreVert fontSize="small" />
            </IconButton>
          </Box>
          
          <Typography variant="subtitle1" noWrap title={doc.name}>
            {doc.name}
          </Typography>
          
          {doc.type === 'file' && (
            <Stack direction="row" spacing={1}>
              <Chip label={doc.size} size="small" variant="outlined" />
              {doc.version && (
                <Chip 
                  label={`v${doc.version}`} 
                  size="small" 
                  color="primary" 
                  variant="outlined"
                />
              )}
            </Stack>
          )}
          
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" color="text.secondary">
              {doc.modified}
            </Typography>
            {doc.status && (
              <Chip
                icon={
                  doc.status === 'synced' ? <CheckCircle /> :
                  doc.status === 'syncing' ? <CloudUpload /> :
                  <Warning />
                }
                label={
                  doc.status === 'synced' ? 'Синхронізовано' :
                  doc.status === 'syncing' ? 'Синхронізація...' :
                  'Помилка'
                }
                size="small"
                color={
                  doc.status === 'synced' ? 'success' :
                  doc.status === 'syncing' ? 'primary' :
                  'error'
                }
                variant="outlined"
              />
            )}
          </Stack>
          
          {doc.shared && (
            <AvatarGroup max={3} sx={{ justifyContent: 'flex-start' }}>
              {doc.shared.map((user, i) => (
                <Avatar key={i} sx={{ width: 24, height: 24, fontSize: 12 }}>
                  {user[0].toUpperCase()}
                </Avatar>
              ))}
            </AvatarGroup>
          )}
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<Visibility />} onClick={() => handlePreview(doc)}>
          Переглянути
        </Button>
        <Button size="small" startIcon={<Share />} onClick={() => handleShare(doc)}>
          Поділитися
        </Button>
      </CardActions>
    </Card>
  );

  const DocumentListItem = ({ doc }: { doc: Document }) => (
    <ListItem
      sx={{
        '&:hover': { bgcolor: 'action.hover' },
        cursor: 'pointer',
        borderRadius: 1,
        mb: 0.5
      }}
    >
      <ListItemIcon>
        {getFileIcon(doc)}
      </ListItemIcon>
      <ListItemText
        primary={
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body1">{doc.name}</Typography>
            {doc.starred && <Star sx={{ color: 'warning.main', fontSize: 16 }} />}
            {doc.version && (
              <Chip label={`v${doc.version}`} size="small" color="primary" />
            )}
          </Stack>
        }
        secondary={
          <Stack direction="row" spacing={2}>
            <Typography variant="caption">{doc.owner}</Typography>
            <Typography variant="caption">{doc.modified}</Typography>
            {doc.size && <Typography variant="caption">{doc.size}</Typography>}
          </Stack>
        }
      />
      <ListItemSecondaryAction>
        <Stack direction="row" spacing={1}>
          {doc.shared && (
            <AvatarGroup max={3}>
              {doc.shared.map((user, i) => (
                <Avatar key={i} sx={{ width: 24, height: 24, fontSize: 12 }}>
                  {user[0].toUpperCase()}
                </Avatar>
              ))}
            </AvatarGroup>
          )}
          <IconButton size="small" onClick={() => handlePreview(doc)}>
            <Visibility />
          </IconButton>
          <IconButton size="small" onClick={() => handleShare(doc)}>
            <Share />
          </IconButton>
          <IconButton size="small" onClick={(e) => {
            setSelectedDoc(doc);
            setAnchorEl(e.currentTarget);
          }}>
            <MoreVert />
          </IconButton>
        </Stack>
      </ListItemSecondaryAction>
    </ListItem>
  );

  return (
    <Box sx={{ p: 3, minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
              {currentPath.map((path, index) => (
                <Link
                  key={index}
                  underline="hover"
                  color={index === currentPath.length - 1 ? 'text.primary' : 'inherit'}
                  href="#"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  {index === 0 && <Folder sx={{ mr: 0.5 }} fontSize="small" />}
                  {path}
                </Link>
              ))}
            </Breadcrumbs>
            
            <Stack direction="row" spacing={1}>
              <ToggleButtonGroup
                value={viewMode}
                exclusive
                onChange={(_, value) => value && setViewMode(value)}
                size="small"
              >
                <ToggleButton value="grid">
                  <GridView />
                </ToggleButton>
                <ToggleButton value="list">
                  <ViewList />
                </ToggleButton>
              </ToggleButtonGroup>
              
              <Button variant="outlined" startIcon={<CreateNewFolder />}>
                Нова папка
              </Button>
              <Button variant="contained" startIcon={<Upload />}>
                Завантажити
              </Button>
            </Stack>
          </Stack>
          
          <Stack direction="row" spacing={2}>
            <TextField
              size="small"
              placeholder="Пошук документів..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ flexGrow: 1, maxWidth: 400 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            
            <Chip
              icon={<Person />}
              label="Мої документи"
              color="primary"
              variant="filled"
            />
            <Chip
              icon={<Group />}
              label="Спільні"
              variant="outlined"
            />
            <Chip
              icon={<AccessTime />}
              label="Нещодавні"
              variant="outlined"
            />
            <Chip
              icon={<Star />}
              label="Важливі"
              variant="outlined"
            />
          </Stack>
        </Stack>
      </Paper>

      {/* Documents Grid/List */}
      {viewMode === 'grid' ? (
        <Grid container spacing={3}>
          {documents.filter(doc => 
            doc.name.toLowerCase().includes(searchQuery.toLowerCase())
          ).map(doc => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={doc.id}>
              <DocumentCard doc={doc} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper>
          <List>
            {documents.filter(doc => 
              doc.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).map(doc => (
              <DocumentListItem key={doc.id} doc={doc} />
            ))}
          </List>
        </Paper>
      )}

      {/* Floating Action Button */}
      <Zoom in>
        <Fab
          color="primary"
          sx={{ position: 'fixed', bottom: 24, right: 24 }}
        >
          <Upload />
        </Fab>
      </Zoom>

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => selectedDoc && handlePreview(selectedDoc)}>
          <Visibility sx={{ mr: 1 }} /> Переглянути
        </MenuItem>
        <MenuItem onClick={() => selectedDoc && handleShare(selectedDoc)}>
          <Share sx={{ mr: 1 }} /> Поділитися
        </MenuItem>
        <MenuItem>
          <Edit sx={{ mr: 1 }} /> Перейменувати
        </MenuItem>
        <MenuItem>
          <Download sx={{ mr: 1 }} /> Завантажити
        </MenuItem>
        <MenuItem onClick={() => selectedDoc && handleVersionHistory(selectedDoc)}>
          <History sx={{ mr: 1 }} /> Історія версій
        </MenuItem>
        <MenuItem>
          <ContentCopy sx={{ mr: 1 }} /> Дублювати
        </MenuItem>
        <Divider />
        <MenuItem sx={{ color: 'error.main' }}>
          <Delete sx={{ mr: 1 }} /> Видалити
        </MenuItem>
      </Menu>

      {/* Share Dialog */}
      <Dialog open={shareDialog} onClose={() => setShareDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Поділитися документом</DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 2 }}>
            <Typography variant="subtitle1">
              {selectedDoc?.name}
            </Typography>
            
            <TextField
              fullWidth
              label="Додати користувачів"
              placeholder="Введіть email або ім'я"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonAdd />
                  </InputAdornment>
                ),
              }}
            />
            
            <FormControl fullWidth>
              <InputLabel>Права доступу</InputLabel>
              <Select
                value={sharePermission}
                onChange={(e) => setSharePermission(e.target.value)}
                label="Права доступу"
              >
                <MenuItem value="view">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Visibility fontSize="small" />
                    <span>Перегляд</span>
                  </Stack>
                </MenuItem>
                <MenuItem value="comment">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Comment fontSize="small" />
                    <span>Коментування</span>
                  </Stack>
                </MenuItem>
                <MenuItem value="edit">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Edit fontSize="small" />
                    <span>Редагування</span>
                  </Stack>
                </MenuItem>
              </Select>
            </FormControl>
            
            <Divider />
            
            <Stack spacing={2}>
              <Typography variant="subtitle2">Поділитися посиланням</Typography>
              <Stack direction="row" spacing={1}>
                <TextField
                  fullWidth
                  value={shareLink}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button variant="outlined" startIcon={<ContentCopy />}>
                  Копіювати
                </Button>
              </Stack>
              
              <Stack direction="row" spacing={1}>
                <Chip
                  icon={<Lock />}
                  label="Захищене посилання"
                  color="success"
                  size="small"
                />
                <Chip
                  icon={<AccessTime />}
                  label="Діє 7 днів"
                  color="warning"
                  size="small"
                />
              </Stack>
            </Stack>
            
            {selectedDoc?.shared && (
              <>
                <Divider />
                <Stack spacing={2}>
                  <Typography variant="subtitle2">Має доступ</Typography>
                  <List dense>
                    {selectedDoc.shared.map((user, i) => (
                      <ListItem key={i}>
                        <ListItemIcon>
                          <Avatar sx={{ width: 32, height: 32 }}>
                            {user[0].toUpperCase()}
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText primary={user} secondary="Може переглядати" />
                        <ListItemSecondaryAction>
                          <IconButton size="small">
                            <MoreVert />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </>
            )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShareDialog(false)}>Скасувати</Button>
          <Button variant="contained" onClick={() => setShareDialog(false)}>
            Поділитися
          </Button>
        </DialogActions>
      </Dialog>

      {/* Version History Dialog */}
      <Dialog open={versionDialog} onClose={() => setVersionDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Історія версій</DialogTitle>
        <DialogContent>
          <List>
            {[5, 4, 3, 2, 1].map(version => (
              <ListItem key={version}>
                <ListItemIcon>
                  <RestorePage />
                </ListItemIcon>
                <ListItemText
                  primary={`Версія ${version} ${version === 5 ? '(поточна)' : ''}`}
                  secondary={`${version} дні тому • Олександр Петренко`}
                />
                <ListItemSecondaryAction>
                  {version !== 5 && (
                    <Button size="small">Відновити</Button>
                  )}
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setVersionDialog(false)}>Закрити</Button>
        </DialogActions>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={previewDialog} onClose={() => setPreviewDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{selectedDoc?.name}</Typography>
            <Stack direction="row" spacing={1}>
              <IconButton>
                <Download />
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
              <IconButton onClick={() => setPreviewDialog(false)}>
                <MoreVert />
              </IconButton>
            </Stack>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            Попередній перегляд документа
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}