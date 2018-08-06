var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');  // Запрашиваем главный файл контроллера

/* Получаем GET домашнюю страницу. */
router.get('/', ctrlMain.index);    // Ссылаемся на метод для импорта index контроллеров в описаниях маршрутов

module.exports = router;
