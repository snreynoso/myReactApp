import axios from 'axios';

const KEY = 'AIzaSyDZzvZ5Pdw8gsprNkNFUe1uHu_W1oqPkpk';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        typeof: 'video',
        maxResults: 5,
        key: KEY,
    }
});