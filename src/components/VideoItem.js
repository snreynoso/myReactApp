import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        borderRadius: "0.5rem",
        background: 'linear-gradient(45deg, #8c9eff 30%, #1de9b6 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    media: {
        height: 140,
    },
});

const VideoItem = ({ video, onVideoSelect }) => {
    const classes = useStyles();

    return (
        <ListItem onClick={() => onVideoSelect(video)} alignItems="flex-start" >
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={video.snippet.thumbnails.medium.url}
                        title={video.snippet.title}
                        alt={video.snippet.title}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="h2">
                            {video.snippet.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {video.snippet.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ListItem>
    );
};

export default VideoItem;