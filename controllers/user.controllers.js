const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Validator = require("fastest-validator");

function signup(req, res, next) {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  };
  const schema = {
    name: {
      type: "string",
      optional: false,
    },
    email: {
      type: "email",
      optional: false,
      unique: true,
    },
    password: {
      type: "string",
      optional: false,
      min: 3,
    },
  };

  const v = new Validator();
  try {
    const validationReponse = v.validate(user, schema);
    if (validationReponse !== true) {
      return res
        .status(422)
        .send({ message: "Invalid data.", errors: validationReponse });
    }

    models.User.findOne({ where: { email: req.body.email } })
      .then((result) => {
        if (result) {
          return res.status(201).json({ message: "Email Id already Exist!" });
        } else if (!result) {
          models.User.create(user)
            .then((result) => {
              return res
                .status(201)
                .json({ message: "User Created Successfully!", data: result });
            })
            .catch((error) => {
              return res.status(500).json({
                message: "Somthing went wrong",
                error: error,
              });
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    next(error);
  }
}

function login(req, res, next) {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  const schema = {
    email: {
      type: "email",
      optional: false,
      unique: true,
    },
    password: {
      type: "string",
      optional: false,
      min: 3,
    },
  };


  try {
    const v = new Validator();
    const validationReponse = v.validate(user, schema);
    if (!validationReponse) {
        return res
          .status(422)
          .json({ message: "Invalid Data Entered", error: validationReponse });
      }
    models.User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (user === null) {
          return res.status(401).json({ message: "Please Signup First" });
        } else if (user) {


            bcrypt.compare(
            req.body.password,
            user.password,
            (err, result)=>{
                if (result) {
                    // create token
                jwt.sign(
                      {
                        email: user.email,
                        userId: user.id,
                      },
                      "secret",
                      function (error, token) {
                        console.log(token)
                        res.status(200).json({
                          message: "Login Successfully!",
                          token: token,
                        });
                        if (error) {
                          console.log("Error in signing the token");
                        }
                      }
                    );
                  } else {
                    return res.status(400).json({
                      message: "Invalid crediential!",
                    });
                  }
            }
          )


        }
      })
      .catch((error) => {
        return res.status(400).json({
          message: "Please login first!",
          error: error,
        });
      });
  } catch (error) {
    next(error);
  }
}
module.exports = {
  signup,
  login,
};
