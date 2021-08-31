import React from 'react';
import VideoItem from './VideoItem';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
        width: '100%',
        borderRadius: "0.5rem",
        boxShadow: '0 3px 5px 2px #616161',
        //height: '100%'
        //margin: '0.5rem'
    },
    list: {
        overflowY: "auto",
        margin: 0,
        padding: 0,
        listStyle: "none",
        height: "74vh",
        '&::-webkit-scrollbar': {
            width: 10
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: "darkgrey",
            outline: `1px solid slategrey`,
        }
    }
}));

const VideoList = ({ videos, onVideoSelect }) => {
    const classes = useStyles();

    const renderList = videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });

    return (
        <Box className={classes.box}  >
            <List className={classes.list} >
                {renderList}
            </List>
        </Box>
    );
}

export default VideoList;