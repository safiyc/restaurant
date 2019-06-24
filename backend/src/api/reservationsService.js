const reservations = require('./reservationSchema');

reservations.methods(['get', 'post', 'put', 'delete']);

module.exports = reservations;