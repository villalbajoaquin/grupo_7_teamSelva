const db = require("../../database/models");

const userController = {
  list: async (req, res) => {
    try {
      const users = await db.User.findAll({
        order: [
          ["id", "ASC"],
          ["name", "ASC"],
          ["email", "ASC"],
        ],
      });
      const respuesta = {
        meta: {
          status: 200,
          total: products.length,
          url: "api/users",
        },
        data: users,
      };
      res.json(respuesta);
    } catch (err) {
      let errors = {
        status: 500,
        error: err,
      };
      res.json(errors);
    }
  },
};

module.exports = userController;

