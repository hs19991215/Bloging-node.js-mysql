const models = require("../models");

function add(req, res, next) {
  try {
    const address = {
      address: req.body.address,
      userId: req.userData.userId,
    };
    models.Address.create(address).then((result) => {
      if (result) {
        return res
          .status(201)
          .json({ message: "Successfully created new Address", data: result });
      } else {
        return next([{ msg: "Server error" }]);
      }
    });
  } catch (error) {
    next(error)
  }
}
module.exports = {
  add,
};
