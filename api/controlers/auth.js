const jwt = require("jsonwebtoken");
const Services = require("../services/auth");
const UserServices = require("../services/users");

const login = async (req, res) => {
  let user = await UserServices.getUserByEmail(req.body.email);
  if (user == undefined) {
    return res.status(401).json({
      message: "invalid credentials",
    });
  }

  if (!UserServices.authenticate(user.email, req.body.password)) {
    return res.status(401).json({
      message: "invalid credentials",
    });
  }
  const accessToken = Services.generateAccessToken(user.element);
  const refreshToken = Services.generateRefreshToken(user.element);
  return res.status(200).json({
    accessToken,
    refreshToken,
  });
};

const refreshToken = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, MyUser) => {
    if (err) {
      return res.sendStatus(401);
    }

    var user = await UserServices.getUserByEmail(MyUser.email);
    if (user == undefined) {
      return res.status(401).send("invalid credentials");
    }

    const refreshedToken = Services.generateAccessToken(user.element);
    res.send({
      accessToken: refreshedToken,
    });
  });
};

module.exports = {
  login,
  refreshToken,
};
