const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  try {
    const token = req?.headers?.authorization?.split(" ")[1]; //Bearer 3$%^&$@%^*^#(@*&%&!@*)#@^&*
    const decodedToken = jwt?.verify(token, "secret");
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: "Unauthorize",
    });
  }
}

module.exports = {
  checkAuth,
};
