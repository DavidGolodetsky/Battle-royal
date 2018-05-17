var express = require('express');

var app = express();

app.get('/', function (reg, res) {
  res.send('Aloha!')
})

var bands = [
  {
    id: 1,
    name: 'Radiohead'
  },
  {
    id: 2,
    name: 'Portishead'
  },
  {
    id: 3,
    name: 'Blonde Radhead'
  }
];

app.get('/bands', function (req, res) {
  res.send(bands);
})

app.get('/bands/:id', function (req, res) {
  var group = bands.find(function (group) {
    return group.id === Number(req.params.id)
  });
  res.send(group);
})

app.listen(3012, function (){
  console.log('server stareted')
})
