const Database = require('../database');

class OptionsModel{
    constructor(){
        this.db = new Database();
    }
    
    async getAllEmpresa(){
        const query = 'SELECT * FROM empresa';
        return  await this.db.query(query);
    }

    async getAllPaises(){
    // const query = "SELECT e.id, p.paises, e.nombre FROM estados as e JOIN pais as p ON p.id = e.pais_id";
    // const query = 'SELECT p.paises AS pais, ARRAY_AGG(e.nombre) AS estados FROM pais p JOIN estados e ON p.id = e.pais_id GROUP BY p.id, p.paises';
    const query = 'SELECT * FROM pais';
        return  await this.db.query(query);
    }

    async getAllEstadosByPaisId(paisId){
        const query = 'SELECT * FROM estados WHERE pais_id = $1';
        const values = [paisId];
        return await this.db.query(query, values);
    }
}

module.exports = OptionsModel