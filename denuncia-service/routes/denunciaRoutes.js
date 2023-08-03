const express = require('express');
const DenunciaController = require('../controllers/denunciaController');

class DenunciaRoutes{
    constructor(){
        this.router = express.Router();
        this.denunciaController = new DenunciaController();
        this.setupRoutes();
    }
setupRoutes(){
    this.router.post('/', this.denunciaController.createDenuncia.bind(this.denunciaController))
    this.router.get('/', this.denunciaController.getDenuncia.bind(this.denunciaController))
    this.router.get('/:folio/:password', this.denunciaController.searchDenunciaByFolioAndPassword.bind(this.denunciaController))
    
    // La función bind() se usa aquí para asegurarse de que, 
    // cuando se llame a createDenuncia a través de la ruta POST, 
    // el contexto (this) dentro del método createDenuncia se refiera al objeto this.denunciaController
}

getRouter(){
    return this.router;
}

}


module.exports = new DenunciaRoutes().getRouter();