const nodemailer = require('nodemailer');
const emailCredentials = {
  user: 'kalanin.peto.ine@gmail.com',
  pass: 'xJJMsyT2W86XYDDj',
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: emailCredentials.user,
    pass: emailCredentials.pass,
  },
});

transporter
  .verify()
  .then((s) => {
    console.log('Email connection was successfully established.');
  })
  .catch((e) => {
    console.error('Something went wrong connecting to email:');
    console.error(e);
  });

const prepareEmail = (form) => {
  return {
    from: emailCredentials.user,
    to: 'kalanin.peto@gmail.com',
    subject: `Kontakt portfolio - ${form.firstName} ${form.lastName}`,
    text: `${form.message}\n\nFrom: ${form.firstName} ${form.lastName}\nEmail: ${form.email}`,
  };
};

const sendEmail = (form) => {
  const emailOptions = prepareEmail(form);
  transporter
    .sendMail(emailOptions)
    .then((fullfill) => {
      console.log('Email was successfully send.');
    })
    .catch((error) => {
      console.error('Email was not send:');
      console.error(error);
    });
};

exports.sendEmail = sendEmail;
