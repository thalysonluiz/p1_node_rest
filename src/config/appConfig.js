require('dotenv').config();

export default {
  url: `${process.env.APP_URL}:${process.env.APP_PORT}`, // 'http://localhost:3001',
};
