import axios from 'axios';

export const sendMail = mail => dispatch => axios.post('/api/contact', mail).then(res => console.log(res));
