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
        primary: {
            light: '#757ce8',
            main: '#4354b5',//'#3f50b5',
            dark: '#a83232',//'#002884',
            contrastText: '#fff',
        },
        background: {
            default: "#d6ddff"
        },
        secondary: {
            light: '#757ce8',
            main: '#757ce8',
            dark: '#ba000d',
            //contrastText: '#000',
        },
        input: {
            color: '#ff1100'
        }
    }
});

const themeDark = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#566096',//'#3f50b5',
            dark: '#a83232',//'#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#757ce8',
            main: '#757ce8',
            dark: '#ba000d',
            contrastText: '#ff0000',
        },
        background: {
            default: "#424141"
        },
        text: {
            //primary: "#ffffff"
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

export default function App() {
    const [light, setLight] = React.useState(true);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const classes = useStyles();

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

    const onVideoSelect = video => {
        setSelectedVideo(video);
    };

    useEffect(() => {
        (async () => {
            await youtube.get('/search', {
                params: {
                    q: 'hola'
                }
            });
        })();
    }, []); // Empty [] to call it just once

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
                        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                    </Grid>
                </Grid>
            </Grid>
            <Button onClick={() => setLight((prev) => !prev)} className={classes.button} ml={2}>Toggle Theme</Button>
        </ThemeProvider>
    );
}