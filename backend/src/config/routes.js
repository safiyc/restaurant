const express = require('express');

module.exports = (server) => {
    const router = express.Router();

    server.use('/api', router);

    //Rotas do API - 3
    const reservationsService = require('../api/reservationsService');
    reservationsService.register(router, '/reservations');
}
