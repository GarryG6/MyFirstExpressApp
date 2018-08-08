/* Получить (GET) домашнюю страницу*/
module.exports.homelist = function (req, res) {
    res.render('location-list', {title: 'Home'});
};

/* Получить (GET) страницу с информацией о местоположениях */
module.exports.locationInfo = function (req, res) {
    res.render('index', {title: 'Location Info'});
};

/* Получить (GET) страницу с добавлением отзыва*/
module.exports.addReview = function (req,res) {
    res.render('index',{title:'Add Review'});
};