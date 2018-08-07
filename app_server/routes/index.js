var express = require('express');
var router = express.Router();
var ctlrLocation = require('../controllers/location');  // Запрашиваем файлы контроллеров
var ctlrOthers = require('../controllers/others');

/* Страницы местоположений */
router.get ('/', ctlrLocation.homelist);               // Задаем маршруты для местоположений и устаналиваем их
router.get('/location',ctlrLocation.locationInfo);       // соответствие функциям контроллеров
router.get('/location/review/new',ctlrLocation.addReview);

/* Другие страницы */
//router.get('/about',ctlrLocation.about);                // Задаем остальные маршруты
router.get('/about', ctlrOthers.about);
module.exports = router;
