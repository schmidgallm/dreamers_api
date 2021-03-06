const dotenv = require('dotenv');
const mailgun = require('mailgun-js');

dotenv.config();

// init mailgun config
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

module.exports = {
  // welcome email after registration
  welcomeEmail: email => {
    // init email headers and body
    const data = {
      from: 'schmidgallm.10@gmail.com',
      to: email,
      subject: 'Welcome',
      text: 'Welcome to Dreamers!!'
    };

    // send email
    mg.messages().send(data, function(error, body) {
      if (error) {
        console.log(error);
      }
      console.log(body);
    });
  },

  // notification email when user likes your story
  storyLikeNotification: (email, story) => {
    // init email headers and body
    const data = {
      from: 'schmidgallm.10@gmail.com',
      to: email,
      subject: 'Great Job!',
      text: `${story} is getting likes!!`
    };

    // send email
    mg.messages().send(data, function(error, body) {
      if (error) {
        console.log(error);
      }
      console.log(body);
    });
  },

  // notification email when user comments your story
  storyCommentNotification: (email, user) => {
    // init email headers and body
    const data = {
      from: 'schmidgallm.10@gmail.com',
      to: email,
      subject: 'Great Job!',
      text: `${user} commented your story!`
    };

    // send email
    mg.messages().send(data, function(error, body) {
      if (error) {
        console.log(error);
      }
      console.log(body);
    });
  },

  // notification email when user likes your prompt
  promptLikeNotification: (email, prompt) => {
    // init email headers and body
    const data = {
      from: 'schmidgallm.10@gmail.com',
      to: email,
      subject: 'Great Job!',
      text: `${prompt} is gettign likes!`
    };

    // send email
    mg.messages().send(data, function(error, body) {
      if (error) {
        console.log(error);
      }
      console.log(body);
    });
  },

  // notification email when user comments on your prompt
  promptCommentNotification: (email, user) => {
    // init email headers and body
    const data = {
      from: 'schmidgallm.10@gmail.com',
      to: email,
      subject: 'Great Job!',
      text: `${user} commented on your prompt!`
    };

    // send email
    mg.messages().send(data, function(error, body) {
      if (error) {
        console.log(error);
      }
      console.log(body);
    });
  }
};

// ----------
// TODO
// ----------
// create email templates for each method
