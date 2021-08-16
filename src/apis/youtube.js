import axios from 'axios';

const KEY = 'AIzaSyCD2oTUTIdGeLTAzhTsA1YxBzlv33kcDWc';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        typeof: 'video',
        maxResults: 5,
        key: KEY,
    }
});