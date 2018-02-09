import axios from 'axios';

export const getHoge = async () => {
  try {
    const response = await axios.get('/api/hoge');
    return [null, response.data];
  } catch (e) {
    return [e, e.response.data];
  }
}
