const express = require('express');
const fs = require('fs');
const writer = require('./utils/writer.js'); //() => true/false
const cart = require('./services/cart.js'); // cart.add() // cart.change() // cart.delete() // => ({cart})

const server = express();
server.use(express.json());



server.get('/catalog', (req, res) => {
  fs.readFile('./db/catalog.json', 'utf-8', (err, data) => {
      if (!err) {

          res.json(JSON.parse(data));
      } else {
        console.log(err)
      }
  })
});

server.get('/single:id', (req, res) => {
  fs.readFile('./db/catalog.json', 'utf-8', (err, data) => {
      if (!err) {
        res.json(JSON.parse(data).find(item => item.id === req.params.id));
      } else {
        console.log(err)
      }
  })
});

server.get('/cart', (req, res) => {
  fs.readFile('./db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
          res.json(JSON.parse(data));
      } else {
        console.log(err)
      }
  })
});

server.post('/cart', (req, res) => {
  fs.readFile('./db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
          let newCart = cart.add(JSON.parse(data), req.body);
          writer('./db/cart.json', newCart)
              .then(status => {
                  if (status) {
                      res.json({ status });
                  } else {
                      res.sendStatus(500);
                  }
              })
      } else {
        console.log(err);
      }
  })
})

server.put('/cart/:id', (req, res) => {
  fs.readFile('./db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
          let newCart = cart.change(JSON.parse(data), req.params.id, req.body.amount);
          writer('./db/cart.json', newCart)
              .then(status => {
                  if (status) {
                      res.json({ status });
                  } else {
                      res.sendStatus(500);
                  }
              })
      } else {
        console.log(err);
      }
  })
})

server.delete('/cart/:id', (req, res) => {
  fs.readFile('./db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
          let newCart = cart.delete(JSON.parse(data), req.params.id);
          writer('./db/cart.json', newCart)
              .then(status => {
                  if (status) {
                      res.json({ status });
                  } else {
                      res.sendStatus(500);
                  }
              })
      } else {
        console.log(err);
      }
  })
})


server.listen(3000, () => { console.log('SERVER AT PORT 3000...') });