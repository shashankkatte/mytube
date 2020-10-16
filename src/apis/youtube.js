import axios from 'axios';

const KEY = 'AIzaSyAhIcGwUsCX_w1d4t0dMjKujYrAI15P0FA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
