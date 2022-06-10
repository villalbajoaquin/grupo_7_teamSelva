const path = require("path");

const shows =  [
    {
        id: 01,
        imgsrc: 'img\show3.jpg',
        name: 'Mega Matine Bailable',
        date: '25/05/22 20:00',
        tickets: 600,
    },
    {
        id: 02,
        imgsrc: 'img\show4.jpg',
        name: 'Show Matías Valdez',
        date: '28/05/22 22:00',
        tickets: 550,
    },
    {
        id: 03,
        imgsrc: 'img\show5.jpg',
        name: 'Kolombo en UMMA',
        date: '10/06/22 21:00',
        tickets: 550,
    },
    {
        id: 04,
        imgsrc: 'img\show6.jpg',
        name: 'Noche Retro en UMMA',
        date: '11/06/22 21:00',
        tickets: 550,
    },
    {
        id: 05,
        imgsrc: 'img\show7.jpg',
        name: 'Los Hijos de los Barrios',
        date: '18/06/22 21:00',
        tickets: 350,
    },
    {
        id: 06,
        imgsrc: 'img\show8.jpg',
        name: 'Atómicos: Tributo a Divididos',
        date: '19/06/22 22:00',
        tickets: 350,
    },
    {
        id: 07,
        imgsrc: 'img\show9.jpg',
        name: 'NTVG en UMMA',
        date: '07/07/22 21:00',
        tickets: 550,
    },
    {
        id: 08,
        imgsrc: 'img\show10.jpg',
        name: 'Charla del "Pela" Romero',
        date: '07/07/22 21:30',
        tickets: 350,
    },
    {
        id: 09,
        imgsrc: 'img\show11.jpg',
        name: 'Un Show de Otro Planeta',
        date: '16/07/22 16:30',
        tickets: 1200,
    },
    {
        id: 10,
        imgsrc: 'img\show12.jpg',
        name: 'Las Manos de Filippi',
        date: '03/09/22 21:00',
        tickets: 550,
    }
];

const mainController = {
    index: (req, res) => {
        res.render('index', {shows: shows});
    }
}

module.exports = mainController; 