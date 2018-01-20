'use strict';

module.exports = function(Event) {

  Event.statistics = (cb) => {
    Event.find({order: 'date ASC'}, (err, events) => {
      if(events.length > 0) {
        const firstDate = events[0].date;
        const lastDate = events[events.length - 1].date;
        const count = events.length;
        const response = {
          first: firstDate,
          last: lastDate,
          count: count
        };
        cb(null, response);
      }
    })
  };

  Event.remoteMethod(
    'statistics', {
      http: {
        path: '/statistics',
        verb: 'get'
      },
      returns: {
        arg: 'firstDate',
        type: 'object',
        root: true
      }
    }
  )

};
