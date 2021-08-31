import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    box: {
        boxShadow: '0 3px 5px 2px #616161',
        borderRadius: "0.5rem",
        padding: '0',
        background: 'linear-gradient(45deg, #8c9eff 30%, #1de9b6 90%)',
    },
    media: { 
        border: '0',  
        margin: '0',
    }
});

const VideoDetail = ({ video }) => {
    const classes = useStyles();

    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <Card className={classes.box}>
            <CardMedia className={classes.media}
                component='iframe'
                height='400'
                image={videoSrc}
                title={video.snippet.title}
                
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="h2">
                    {video.snippet.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {video.snippet.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VideoDetail;