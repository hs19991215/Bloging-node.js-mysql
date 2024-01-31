const models = require("../models");
const Validatior = require("fastest-validator");

function save(req, res, next) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryId: req.body.categoryId,
    userId: 2,
  };

  const schemea = {
    title: {
      type: "string",
      optional: false,
      max: "100",
    },
    content: {
      type: "string",
      optional: false,
      max: "500",
    },
    categoryId: {
      type: "number",
      optional: false,
    },
    imageUrl: {
      type: "string",
      optional: false,
    },
  };
  const v = new Validatior();
  let validationResponse = v.validate(post, schemea);

  if (validationResponse !== true) {
    return res
      .status(400)
      .json({ message: "Validation Failed", error: validationResponse });
  }

  try {
    models.Post.create(post)
      .then((result) => {
        if (result) {
          res.status(201).json({
            message: "Post Created Successfully",
            data: result,
          });
        }
        if (!result) {
          res.status(400).json({
            message: "Operation Failed",
            data: result,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: "Somthing went wrong",
          error: error,
        });
      });
  } catch (error) {
    next(error);
  }
}

function show(req, res, next) {
  const id = req.params.id;
  try {
    models.Post.findByPk(id)
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: "Successfully get  the Post by ID",
            data: result,
          });
        }
        if (!result) {
          res.status(400).json({
            message: "Operation Failed",
            data: result,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: "Somthing went wrong",
          error: error,
        });
      });
  } catch (error) {
    next(error);
  }
}

function showall(req, res, next) {
  try {
    models.Post.findAll()
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: "Successfully get  the Post by ID",
            data: result,
          });
        }
        if (!result) {
          res.status(400).json({
            message: "Operation Failed",
            data: result,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: "Somthing went wrong",
          error: error,
        });
      });
  } catch (error) {
    next(error);
  }
}

function update(req, res, next) {
  const id = req.params.id;
  const userId = req.params.userId;
  const updatedValues = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryId: req.body.categoryId,
  };

  const schemea = {
    title: {
      type: "string",
      optional: false,
      max: "100",
    },
    content: {
      type: "string",
      optional: false,
      max: "500",
    },
    categoryId: {
      type: "number",
      optional: false,
    },
    imageUrl: {
      type: "string",
      optional: false,
    },
  };
  const v = new Validatior();
  const validationResponse = v.validate(updatedValues, schemea);
  if (validationResponse !== true) {
    return res
      .status(400)
      .json({ message: "Validation Failed", error: validationResponse });
  }
  try {
    models.Post.update(updatedValues, {
      where: {
        id: id,
        userId: userId,
      },
    })
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: "Post updated successfully!",
            data: updatedValues,
          });
        }
        if (!result) {
          res.status(400).json({
            message: "Operation Failed",
            data: result,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: "Somthing went wrong",
          error: error,
        });
      });
  } catch (error) {
    next(error);
  }
}

function destroy(req, res, next) {
  const id = req.params.id;
  const userId = req.params.userId;

  try {
    models.Post.destroy({ where: { id: id, userId: userId } })
      .then((result) => {
        res.status(200).json({
          message: "Post deleted successfully!",
          data: result,
        });
        if (!result) {
          res.status(400).json({
            message: "Operation Failed",
            data: result,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: "Somthing went wrong",
          error: error,
        });
      });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  save,
  show,
  showall,
  update,
  destroy,
};
