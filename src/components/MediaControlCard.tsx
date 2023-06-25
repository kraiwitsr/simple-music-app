import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import { useTheme } from '@mui/material/styles';

interface FunctionProps {
    togglePlay(): void;
    isPlaying: boolean;
    currentSong: {
        title: string;
        source: string;
    };
    skipBack(): void;
    skipNext(): void
    duration: string | null,
    currentTime: string | null;
}

const MediaControlCard: React.FC<FunctionProps> = (props) => {
    const theme = useTheme();

    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/2/05.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="green iguana"
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.currentSong.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis aliquid accusamus hic libero ad debitis voluptates! Assumenda praesentium molestias, voluptates laboriosam est harum doloremque esse qui recusandae natus? Ea, provident!
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous" onClick={props.skipBack}>
                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                </IconButton>
                <IconButton aria-label="play/pause" onClick={props.togglePlay}>
                    {props.isPlaying ?
                        <PauseIcon sx={{ height: 38, width: 38 }} /> :
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    }
                </IconButton>
                <IconButton aria-label="next" onClick={props.skipNext}>
                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                </IconButton>
                <Typography variant="subtitle1" color="text.secondary" sx={{ marginTop: 0.8, marginLeft: 1.5}}>
                    {props.currentTime} / {props.duration}
                </Typography>
            </Box>
        </Card>
    );
}

export default MediaControlCard;