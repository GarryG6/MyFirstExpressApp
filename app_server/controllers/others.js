/* Получить (GET) страницу About (О нас) */
module.exports.about = function (req,res) {
    res.render('index', {title: 'About'});
}