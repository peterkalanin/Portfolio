const express = require('express');
const path = require('path');
const hbs = require('hbs');
// const email = require('./helpers/email');

const app = express();
const APP_PORT = 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const JOBS = [
  {
    position: 'Web developer',
    employer: 'CVTI SR',
    started: 'Jul 2016',
    ended: 'Feb 2021',
    isCurrent: false,
    location: 'Bratislava SR',
    body: [
      { label: 'Angular developer', desc: 'Práca na angular projekte.' },
      {
        label: 'Výsledky',
        desc: 'Denne využívaný systém s tisíckami používateľov.',
      },
    ],
  },
];

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.use(express.json()); // to support JSON-encoded bodies
app.use(
  express.urlencoded({
    extended: true,
  })
);

const appLogger = function (req, res, next) {
  console.log(`${new Date().toISOString()} -> ${req.method} ${req.url}`);
  next();
};
app.use(appLogger);

app.get('/', (req, res) => {
  res.render('index', { jobs: JOBS });
});

app.post('/', (req, res) => {
  console.log(req.body);
  // email.sendEmail(req.body);
  res.render('index', { jobs: JOBS });
});

const server = app.listen(APP_PORT, () => {
  console.log(`Server started on port ${server.address().port}.`);
});
