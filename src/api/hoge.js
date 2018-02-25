import axios from 'axios';

export const get = async () => {
  try {
    const response = await axios.get('/api/hoge');
    return [null, response.data];
  } catch (e) {
    return [e, e.response.data];
  }
}

export const post = async (val) => {
  try {
    const response = await axios.post(`/api/hoge?val=${val}`);
    return [null, response.data];
  } catch (e) {
    return [e, e.response.data];
  }
}
