
const Database = require("../database");

class DenunciaModel {
  constructor() {
    this.db = new Database();
  }

  async createDenuncia(data) {
    try {
      const {
        name,
        email,
        telefono,
        empresa,
        pais,
        estado,
        centro,
        detalle,
        fecha,
        password,
      } = data;

      const folio = Math.floor(10000 + Math.random() * 90000);
      await this.db.query(
        "INSERT INTO denuncias (folio, name, email, telefono, empresa, pais, estado, centro, detalle, fecha, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
        [
          folio,
          name,
          email,
          telefono,
          empresa,
          pais,
          estado,
          centro,
          detalle,
          fecha,
          password
        ]
      );

      return folio;
    } catch (error) {
      console.error(error);
      throw new Error("Error al guardar la denuncia.");
    }
  }

  async getAll() {
    const query = "SELECT * FROM denuncias";
    return await this.db.query(query);
  }

  async getDenunciaByFolioAndPassword(folio, password){
try {
      const query = 'SELECT * FROM denuncias WHERE folio = $1 AND password = $2';
      const result = await this.db.query(query, [folio, password]);
      return result[0]
} catch (error) {
  throw new Error('Error al buscar denuncia por folio y password');
}
  }
}

module.exports = DenunciaModel;
