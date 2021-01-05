import axios from 'axios';

const KEY = 'AIzaSyD3a1cwYRC013-wOgw4cogydVh_0eNaPa4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResult: 5,
            key: KEY
        }
    
});