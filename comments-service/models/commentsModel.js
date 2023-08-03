const Database = require("../database");

class CommentsModel {
  constructor() {
    this.db = new Database();
  }
  async createComment(data) {
    try {
      const { contenido, status, folio, usuario_id } = data;
      await this.db.query(
        "INSERT INTO comentarios (contenido, status, folio, usuario_id) VALUES ($1, $2, $3, $4)",
        [contenido, status, folio, usuario_id]
      );
    } catch (error) {
      console.error(error);
      throw new Error("Error al guardar el comentario.");
    }
  }

  async getAll() {
    // const query = 'SELECT * FROM comentarios';
    const query =
      "SELECT c.id, c.contenido, c.status, d.folio FROM comentarios as c JOIN denuncias as d ON d.id = c.folio";
    return await this.db.query(query);
  }

  async getCommentByFolio(folio) {
    try {
      const query = "SELECT c.id, c.contenido, c.status, d.folio FROM comentarios as c JOIN denuncias as d ON d.id = c.folio WHERE d.folio = $1";
      const result = await this.db.query(query, [folio]);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener el comentario por ID.");
    }
  }
}

module.exports = CommentsModel;
