import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';

const themeLight = createTheme({
    palette: {
        secondary: {
            main: '#757ce8',
        },
    }
});

const themeDark = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#A9A9A9'
        },
        secondary: {
            main: '#CACACA',
        },
    }
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        width: '100%',
        margin: '0',
        padding: '0'
    },
    header: {
        height: '4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    button: {
        background: 'linear-gradient(45deg, #8c9eff 30%, #1de9b6 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        margin: '0 0 0 1rem'
    }
}));

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [light, setLight] = React.useState(true);
    const classes = useStyles();

    useEffect(() => {
        onFormSubmit('Hello');
    }, []); // Empty [] to call it just once

    const onFormSubmit = async term => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    q: term
                }
            });

            setVideos(response.data.items);
            setSelectedVideo(response.data.items[0]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ThemeProvider theme={light ? themeLight : themeDark}>
            <CssBaseline />
            <AppBar position="static" className={classes.header}>
                <Typography
                    color='initial'
                    align='center'
                    variant='h5'
                    gutterBottom
                >
                    Video Search using React and Material UI (w/Nested Callbacks)
                </Typography>
            </AppBar>

            <Grid container spacing={2} className={classes.grid}>
                <Grid item sm={12}>
                    <SearchBar onFormSubmit={onFormSubmit} numVideos={videos.length} />
                </Grid>
                <Grid item sm={8}>
                    <Grid container justifyContent="center" >
                        <VideoDetail video={selectedVideo} />
                    </Grid>
                </Grid>
                <Grid item sm={4}>
                    <Grid container justifyContent="center" >
                        <VideoList
                            onVideoSelect={setSelectedVideo} // video => setSelectedVideo(video)
                            videos={videos}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Button onClick={() => setLight((prev) => !prev)} className={classes.button} ml={2}>Toggle Theme</Button>
        </ThemeProvider>
    );
}

export default App;