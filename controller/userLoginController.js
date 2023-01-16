const generateToken = require("../utlis/generateToken");

const verifyUser = (req, res) => {
  const email = req.body.email;
  const token = generateToken(email);
  res.json({ token });
};

module.exports = { verifyUser };
