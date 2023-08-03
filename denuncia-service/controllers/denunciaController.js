const DenunciaModel = require("../models/denunciaModels");

class DenunciaController {
  constructor() {
    this.denunciaModel = new DenunciaModel();
  }

  async createDenuncia(req, res) {
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
      } = req.body;

      const data = {
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
      };

      const folio = await this.denunciaModel.createDenuncia(data);
      res.json({ folio });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error, denuncia not saved." });
    }
  }

  async getDenuncia(req, res) {
    try {
      const denuncias = await this.denunciaModel.getAll();
      res.json(denuncias);
    } catch (error) {
      res.status(500).json({ message: "Error getting denuncias" });
    }
  }

  async searchDenunciaByFolioAndPassword(req, res) {
    try {
      const { folio, password } = req.params;
      const denuncia = await this.denunciaModel.getDenunciaByFolioAndPassword(folio, password);
      if (!denuncia) {
        return res.status(404).json({ message: "Denuncia no encontrada" });
      }

      return res.json(denuncia);
    } catch (error) {
      res.status(500).json({ error: 'Error in search folio and password' });
    }
  }
}

module.exports = DenunciaController;
