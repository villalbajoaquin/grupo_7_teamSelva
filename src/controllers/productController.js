const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const Op = db.Sequelize.Op;


// controller
const productController = {
  product_list: (req, res) => {
    db.Product.findAll({
      order: [
        ["date", "ASC"],
        ["time", "ASC"],
      ],
    })
      .then((shows) => {
        res.render("products/productList", { shows });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  product_createA: (req, res) => {
    res.render("products/productCreate");
  },
  product_createB: (req, res) => {
    let errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      if (req.file) {
        fs.unlinkSync(
          path.join(__dirname, "../../public/img/uploads/", req.file.filename)
        );
      }
      return res.render("products/productCreate", {
        errors: errors.mapped(),
        old: req.body,
      });
    } else {
      db.Product.create({
        name: req.body.name,
        imgsrc: `img/uploads/${req.file.filename}`,
        date: req.body.date,
        time: req.body.time,
        tickets: req.body.tickets,
        price: req.body.price,
      })
        .then(() => {
          res.redirect("/product");
        })
        .catch((err) => {
          res.send(err);
        });
    }
  },
  product_search: (req, res) => {
    let input = req.query.search;

    db.Product.findAll({
      where: {
        name: {
          [Op.like]: `%${input}%`,
        },
      },
      order: [
        ["date", "ASC"],
        ["time", "ASC"],
      ],
    })
      .then((shows) => {
        res.render("products/productList", { shows });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  //product time filters---------------------------------------------
  twenty_four: (req, res) => {
    db.Product.findAll({
      where: {
        date: {
          [Op.lte]: new Date(Date.now() + 24 * 60 * 60 * 1000),
        },
      },
      order: [
        ["date", "ASC"],
        ["time", "ASC"],
      ],
    })
      .then((shows) => {
        res.render("products/productList", { shows });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  seven: (req, res) => {
    db.Product.findAll({
      where: {
        date: {
          [Op.lte]: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      },
      order: [
        ["date", "ASC"],
        ["time", "ASC"],
      ],
    })
      .then((shows) => {
        res.render("products/productList", { shows });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  thirty: (req, res) => {
    db.Product.findAll({
      where: {
        date: {
          [Op.lte]: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
      },
      order: [
        ["date", "ASC"],
        ["time", "ASC"],
      ],
    })
      .then((shows) => {
        res.render("products/productList", { shows });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  //product time filters---------------------------------------------
  product_editA: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then((shows) => {
        res.render("products/productEdit", { shows });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  product_editB: (req, res) => {
    let errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      if (req.file) {
        fs.unlinkSync(
          path.join(__dirname, "../../public/img/uploads/", req.file.filename)
        );
      }
      db.Product.findByPk(req.params.id)
        .then((shows) => {
          res.render("products/productEdit", {
            errors: errors.mapped(),
            old: req.body,
            shows: shows,
          });
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      if (req.file) {
        db.Product.update(
          {
            name: req.body.name,
            imgsrc: `img/uploads/${req.file.filename}`,
            date: req.body.date,
            time: req.body.time,
            tickets: req.body.tickets,
            price: req.body.price,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        )
          .then(() => {
            res.redirect("/product");
          })
          .catch((err) => {
            res.send(err);
          });
      } else {
        db.Product.update(
          {
            name: req.body.name,
            date: req.body.date,
            time: req.body.time,
            tickets: req.body.tickets,
            price: req.body.price,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        )
          .then(() => {
            res.redirect("/product");
          })
          .catch((err) => {
            res.send(err);
          });
      }
    }
  },
  product_delete: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then((show) => {
        let imgPath = path.join(__dirname, "../../public/" + show.imgsrc);
        if (fs.existsSync(imgPath)) {
          fs.unlinkSync(imgPath);
        }
      })
      .catch((err) => {
        res.send(err);
      });

    db.Product.destroy({
      where: {
        id: req.params.id,
      },
      force: true,
    })
      .then(() => {
        res.redirect("/product");
      })
      .catch((err) => {
        res.send(err);
      });
  },
  product_detail: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then((show) => {
        res.render("products/productDetail", { show });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  product_cart: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then((show) => {
        res.render("products/productCart", { show });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  
};

module.exports = productController; 