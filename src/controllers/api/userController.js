const db = require("../../database/models");

const userController = {
  list: async (req, res) => {
    try {
      // alias del modelo en users.js = 'Users'
      const users = await db.Users.findAll({
        order: [
          ["id", "ASC"],
          ["firstName", "ASC"],
          ["email", "ASC"],
        ],
      });
      const respuesta = {
        meta: {
          status: 200,
          total: users.length,
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
      const users = await db.Users.findByPk(req.params.id);
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

