var express = require('express');
var router = express.Router();

/* Получаем GET домашнюю страницу. */
router.get('/', function(req, res, next) {  // Здесь маршрутизатор будет искать URL
  res.render('index', { title: 'Express' });  // Содержимое контроллера
});

module.exports = router;
