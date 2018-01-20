const moment = require('moment');

module.exports = (app) =>{
  app.dataSources.mongo.automigrate('Event', (err) => {
    if(err) throw err;

    const events = [{
      date: moment(),
      title: "Eperszedés",
      location: "Eperfalva"
    },{
      date: moment().add(-3, 'days'),
      title: "Almaevés",
      location: "Aprajafalva"
    },{
      date: moment().add(7, 'days'),
      title: "Sokat evés",
      location: "Debrecen",
      note: "Nagyon sokat fogunk enni"
    }];

    app.models.Event.create(events, (err, events) => {
      if(err) throw err;
      console.log('Models created: ', events);
    });

  });
};
