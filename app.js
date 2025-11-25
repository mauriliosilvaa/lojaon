const express = require('express');
const app = express();

// Configura EJS como motor de visualização
app.set('view engine', 'ejs');
app.set('views', './views');

// Permite servir arquivos estáticos (CSS, imagens, JS)
app.use(express.static('public'));

// Lista de produtos com categorias
const produtos = [
  { id: 1, nome: 'Chinelo Floral', preco: 39.90, imagem: '/fotos/chinelo1.jpg', categoria: 'Chinelos' },
  { id: 2, nome: 'Pano Religioso', preco: 24.90, imagem: '/fotos/pano1.jpg', categoria: 'Panos' },
  { id: 3, nome: 'Vestido Estampado', preco: 89.90, imagem: '/fotos/vestido1.jpg', categoria: 'Vestidos' },
];

// Rota principal redireciona para produtos
app.get('/', (req, res) => {
  res.redirect('/produtos');
});

// Rota de produtos com filtro por categoria
// Rota para todos os produtos
app.get('/produtos', (req, res) => {
  res.render('produtos', { produtos, categoria: null });
});

// Rota para produtos filtrados por categoria
app.get('/produtos/categoria/:categoria', (req, res) => {
  const categoria = req.params.categoria;
  const filtrados = produtos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
  res.render('produtos', { produtos: filtrados, categoria });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});