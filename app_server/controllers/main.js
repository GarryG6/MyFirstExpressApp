/ Получаем GET домашнюю страницу
module.exports.index = function (req, res) {    // Создаем метод для импорта index
    res.render('index', {title: 'Express'});    // Включаем код контроллера для домашней страницы
};