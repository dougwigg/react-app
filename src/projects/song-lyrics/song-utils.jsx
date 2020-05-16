import axios from 'axios';

export const fetchMusixMatch = async (queryParam, CancelToken) => {
  const CORS_URL = 'https://stark-dusk-62893.herokuapp.com/';
  const BASE_URL = 'http://api.musixmatch.com/ws/1.1/';
  const API_KEY = '&apikey=YOUR_KEY';
  
  // Make the request using the token
  return axios.get(`${CORS_URL}${BASE_URL}${queryParam}${API_KEY}`,  { CancelToken });
}

/**
 *  This is handy for simulating XHR latency 
 *  await stall(500);
 *  setLyrics({ lyrics_body: "My Baby is fine."});
 */
export const stall = async (stallTime = 3000) => {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}
