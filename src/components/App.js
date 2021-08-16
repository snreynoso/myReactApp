import React from 'react';
import { Typography } from '@material-ui/core';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(response.data.items);
        this.setState({ videos: response.data.items })
        
    }

    render() {
        return (
            <div>
                <Typography
                    variant='h5'
                    gutterBottom
                >
                    Image Search using React and Material UI
                </Typography>
                <SearchBar numVideos={this.state.videos.length} onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;