import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send("incredible")
})

app.post('/auth/login', (req, res) => {

  const token = jwt.sign({
    emial: req.body.emial,
    fullname: 'Aisayev Duman'
  }, 'kiritokunti');

  res.json({
    success: true,
    token,
  });
})

app.listen('4444', (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('server on');
  }
})