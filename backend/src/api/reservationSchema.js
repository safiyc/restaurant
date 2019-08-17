const restful = require('node-restful');
const mongoose = restful.mongoose;

const reservationSchema = new mongoose.Schema({
    partySize: { type: Number, require: true},
    name: { type: String, require: true},
    date: { type: Date, required: true},
    hour: { type: Number, min: 10, max: 23, required: true },
    minutes: { type: Number, min: 00, max: 45, required: true }
});

module.exports = restful.model('reservationSchema', reservationSchema);