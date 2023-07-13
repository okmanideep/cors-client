import express from 'express';

// server static site folder
const app = express();

app.use(express.static('site'));

app.listen(8282, () => {
  console.log('Available on http://client.localhost.com:8282');
})
