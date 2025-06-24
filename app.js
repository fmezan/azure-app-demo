const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1 style="color: blue;">Hello from Azure!</h1>
    <p>Deployed via GitHub 🚀</p>
  `);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});