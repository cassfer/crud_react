const express = require('express');

// Constants
const PORT = 3000;
const HOST = '';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, ()=>{
  console.log(`Running on http://${HOST}:${PORT}`);
});