const db = require("../../database/models");

const userController = {
  list: async (req, res) => {
    try {
      const users = await db.users.findAll({
        order: [
          ["id", "ASC"],
          ["name", "ASC"],
          ["email", "ASC"],
        ],
      });
      const respuesta = {
        meta: {
          status: 200,
          total: user.length,
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
  detail: async (req, res) => {
    try {
      const users = await db.users.findByPk(req.params.id);
      const respuesta = {
        meta: {
          status: 200,
          url: "api/users/:id",
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

