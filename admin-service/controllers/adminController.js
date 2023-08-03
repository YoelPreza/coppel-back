const AdminModel = require("../models/adminModels");

class AdminController {
  constructor() {
    this.adminModel = new AdminModel();
  }

  async searchAdminByEmailAndPassword(req, res) {
    try {
      const { email, password } = req.params;
      const admin = await this.adminModel.getAdminByEmailAndPassword(email, password);
      if (!admin) {
        return res.status(404).json({ message: "User no encontrada" });
      }

      return res.json(admin);
    } catch (error) {
      res.status(500).json({ error: 'Error in search email and password' });
    }
  }
}

module.exports = AdminController;
