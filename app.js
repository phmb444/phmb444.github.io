const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Substitua 'index.html' pelo nome do seu arquivo HTML, se for diferente.
});

app.listen(port, () => {
  console.log(`Servidor está executando em http://localhost:${port}`);
});
