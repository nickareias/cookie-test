const express = require('express');
const cookieParser = require('cookie-parser')

const cors = require('cors')
// const corsOptions = {
//   origin: [
//     'https://localhost:1234',
//     'https://localhost',
//     'http://localhost:443',
//     'https://localhost:9001'
//   ]
// }

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors());

const port = 4200;

app.post('/set-cookie', function (req, res) {
  res.cookie('test-cookie', req.body.data)
  res.send('cookie set!')
})

app.post('/log', function (req, res) {
  console.log('logging data -- ', req.body.data);
  if (req.body.data.error) {
    console.log('request headers', req.body.data?.error?.config?.headers)
  }
  res.send('done')
})

app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
})
