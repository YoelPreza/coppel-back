const Database = require("../database");

class AdminModel {
  constructor() {
    this.db = new Database();
  }

  async getAdminByEmailAndPassword(email, password) {
    try {
      const query =
        "SELECT * FROM usuarios WHERE email = $1 AND password = $2";
      const result = await this.db.query(query, [email, password]);
      return result[0];
    } catch (error) {
      throw new Error("Error al buscar usuario por folio y password");
    }
  }
}

module.exports = AdminModel;
