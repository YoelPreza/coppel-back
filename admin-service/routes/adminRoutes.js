const express = require('express');
const AdminController = require('../controllers/adminController');

class AdminRoutes{
    constructor(){
        this.router = express.Router();
        this.adminController = new AdminController();
        this.setupRoutes();
    }
setupRoutes(){
    this.router.get('/:email/:password', this.adminController.searchAdminByEmailAndPassword.bind(this.adminController))
    
    // La función bind() se usa aquí para asegurarse de que, 
    // cuando se llame a createDenuncia a través de la ruta POST, 
    // el contexto (this) dentro del método createDenuncia se refiera al objeto this.denunciaController
}

getRouter(){
    return this.router;
}

}


module.exports = new AdminRoutes().getRouter();