const CommentsModel = require("../models/commentsModel");

class CommentsContoller {
  constructor() {
    this.commentsModel = new CommentsModel();
  }

  async createComment(req, res) {
    try {
      const { contenido, status, folio, usuario_id } = req.body;

      const data = { contenido, status, folio, usuario_id };

      await this.commentsModel.createComment(data);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al guardar el comentario." });
    }
  }

  async getComment(req, res) {
    try {
      const comments = await this.commentsModel.getAll();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: "Error getting comments" });
    }
  }

  async getCommentByFolio(req, res) {
    try {
      const { folio } = req.params;
      const comments = await this.commentsModel.getCommentByFolio(folio);
      if (!comments) {
        return res.status(404).json({ message: "Comment no encontrado" });
      }
      res.json(comments);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el comentario por ID." });
    }
  }
}
module.exports = CommentsContoller;
