const i18n = require('i18n');

function changeLocale(locale) {
  i18n.locale = locale;
}

exports.change = changeLocale;

var changeLocale = (locale) => {
  i18n.locale = locale;
};
