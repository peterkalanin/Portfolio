const express = require('express');
const path = require('path');
const hbs = require('hbs');
// const email = require('./helpers/email');
const i18n = require('i18n');
const locale = require('./helpers/locale');

const app = express.Router();
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

i18n.configure({
  locales: ['sk', 'en'],
  cookie: 'locale',
  directory: path.join(__dirname, '../locales'),
  queryParameter: 'lang',
});

hbs.registerHelper('i18n', function (str) {
  return i18n != undefined ? i18n.__n(str) : str;
});

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
app.use(i18n.init);

const appLogger = function (req, res, next) {
  console.log(`${new Date().toISOString()} -> ${req.method} ${req.url}`);
  next();
};
app.use(appLogger);

app.get('/', (req, res) => {
  const lang = req.query.lang || 'sk';
  i18n.locale = lang;
  res.render('index', { jobs: JOBS, lang: lang });
});

app.post('/', (req, res) => {
  // email.sendEmail(req.body);
  res.render('index', { jobs: JOBS, i18n });
});

const server = app.listen(APP_PORT, () => {
  console.log(`Server started on port ${server.address().port}.`);
});
