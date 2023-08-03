const express = require('express');
const OptionsContoller = require('../controllers/selecOptionsController');

class OptionsRoutes{
    constructor(){
        this.router =  express.Router();
        this.optionsContoller = new OptionsContoller();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get('/empresa', this.optionsContoller.getEmpresa.bind(this.optionsContoller))
        this.router.get('/pais', this.optionsContoller.getPais.bind(this.optionsContoller))
        this.router.get('/estados/:paisId', this.optionsContoller.getEstadosByPaisID.bind(this.optionsContoller))
    }
    getRouter () {
        return this.router;
    }
}

module.exports = new OptionsRoutes().getRouter();