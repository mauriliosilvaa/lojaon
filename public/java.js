const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // motor de visualização
app.set('views', './views');  // caminho dos arquivos
app.use(express.static('public'));


