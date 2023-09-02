const express = require('express');
const router = express.Router();

const dados = {
  produtos: [
    {
      id: 1,
      descricao: 'Arroz parboilizado 5Kg',
      valor: 25.0,
      marca: 'Tio João',
    },
    { id: 2, descricao: 'Maionese 250gr', valor: 7.2, marca: 'Helmans' },
    { id: 3, descricao: 'Iogurte Natural 200ml', valor: 2.5, marca: 'Itambé' },
    {
      id: 4,
      descricao: 'Batata Maior Palha 300gr',
      valor: 15.2,
      marca: 'Chipps',
    },
    { id: 5, descricao: 'Nescau 400gr', valor: 8.0, marca: 'Nestlé' },
  ],
};

router.use(express.json());

router.get('/produtos', (_req, res) => {
  res.json(dados.produtos);
});

router.get('/produtos/:id', (req, res) => {
  res.json(dados.produtos.find((p) => p.id === +req.params.id));
});

router.post('/produtos', (req, res) => {
  const newProduct = {
    id: dados.produtos.length + 1,
    ...req.body,
  };
  dados.produtos.push(newProduct);
  res.status(201).json(newProduct);
});

router.put('/produtos/:id', (req, res) => {
  const oldProduct = dados.produtos.findIndex((p) => p.id === +req.params.id);
  dados.produtos[oldProduct] = {
    ...dados.produtos[oldProduct],
    ...req.body,
    id: req.params.id,
  };

  res.status(200).json(dados.produtos[oldProduct]);
});

router.delete('/produtos/:id', (req, res) => {
  const oldProduct = dados.produtos.findIndex((p) => p.id === +req.params.id);

  dados.produtos.splice(oldProduct, 1);
  res.status(204).send();
});

module.exports = router;
