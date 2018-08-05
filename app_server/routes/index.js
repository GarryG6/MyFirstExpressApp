var express = require('express');
var router = express.Router();

// Берем анонимную функцию и описываем её как именованную
var homepageController = function(req, res){
    res.render('index',{title:'Express'});
};

/* Получаем GET домашнюю страницу. */
router.get('/', homepageController);    //Передаем имя этой функции в виде обратного вызова в описании маршрута

module.exports = router;
