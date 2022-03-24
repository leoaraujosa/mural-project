const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// O body-parser é um módulo capaz de converter o body da requisição para vários formatos.
const cors = require('cors');
const posts = require('../model/posts');

const options = {
  origin: 'http://localhost:3000'
}

router.use(cors(options));

//ROTA QUE VAI PEGAR TODOS OS POSTS E EXIBIR NA TELA.
router.get('/all', (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

//ROTA QUE VAI CRIAR UM POST PARA QUE SEJA INSERIDO NA TELA.
router.post('/new', bodyParser.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description);

  res.send('Post adicionado');
});

module.exports = router;