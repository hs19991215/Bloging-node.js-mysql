const models = require("../models");

function add(req, res, next) {
  const category = {
    name: req.body.name,
  };
  try {
    models.Category
      .create(category)
      .then((result) => {
        return res
          .status(201)
          .json({ message: "Category added successfully!", data: result });
      })
      .catch((error) => {
        return res.status(500).json({
          message: "Somthing went wrong",
          error: error,
        });
      });
  } catch (error) {}
}

function find(req, res, next) {
    try {
      models.Category
        .findAll()
        .then((result) => {
          return res
            .status(201)
            .json({ message: "Category fetched successfully!", data: result });
        })
        .catch((error) => {
          return res.status(500).json({
            message: "Somthing went wrong",
            error: error,
          });
        });
    } catch (error) {}
  }

module.exports = {
  add: add,
  find:find
};
