const main = require('./main');
const users = require('./users');
const fighters = require('./fighters');
const events = require('./events')
const roundTimes = require('./round_times');
const roundActionStrike = require('./strike');
const grapple = require('./grapple');
const grappleDefence = require('./grapple_defence');
const strikeDefence = require('./strike_defence');

module.exports = function(app) {
    app.use('/', main);
    app.use('/users', users);
    app.use('/fighters', fighters);
    app.use('/events', events);
    app.use('/round_time', roundTimes);
    app.use('/strike', roundActionStrike);
    app.use('/grapple', grapple);
    app.use('/strike_defence', strikeDefence);
    app.use('/grapple_defence', grappleDefence);
};
