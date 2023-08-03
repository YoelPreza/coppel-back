const OptionsModel = require("../models/selecOptionsModel");

class OptionsContoller {
  constructor() {
    this.optionsModel = new OptionsModel();
  }

  async getEmpresa(req, res) {
    try {
      const empresa = await this.optionsModel.getAllEmpresa();
      res.json(empresa);
    } catch (error) {
      res.status(500).json({ message: "Error getting comments" });
    }
  }

  async getPais(req, res) {
    try {
      const pais = await this.optionsModel.getAllPaises();
      res.json(pais);
    } catch (error) {
      res.status(500).json({ message: "Error getting paises" });
    }
  }

  async getEstadosByPaisID(req, res) {
    try {
      const { paisId } = req.params;
      const estados = await this.optionsModel.getAllEstadosByPaisId(paisId);
      res.json(estados);
    } catch (error) {
      res.status(500).json({ error: "Error getting estados" });
    }
  }
}
module.exports = OptionsContoller;
