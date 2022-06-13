const expressAsync = require("express-async-handler");
const { User } = require("../models/Users");
const { generateToken } = require("../utils/generateToken");
const login = expressAsync(async (req, res) => {
  console.log("login");
  const { email, password } = req.body.data;
  console.log(req.body.data);
  const user = await User.findOne({
    $or: [{ email: email }, { userName: email }],
  });
  if (!user) {
    return res.status(404).json({
      msg: "No account with this email/UserName has been registered.",
    });
  }
  if (user && (await user.matchPassword(password))) {
    return res
      .status(200)
      .json({ msg: "User LoggedIn SuccessFully", user: user });
  } else {
    return res.status(404).json({ msg: "Invalid Credentials" });
  }
});
const register = expressAsync(async (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body.data;
  const existUser = await User.findOne({
    $or: [{ email: email }, { userName: userName }],
  });
  if (existUser) {
    return res.status(400).json({ msg: "User Already Exists" });
  }
  const user = new User({
    firstName: firstName,
    lastName: lastName,
    userName: userName ? userName : "",
    email: email,
    password,
  });
  await user.save();
  res.status(201).json({ msg: "User Created SuccessFully" });
});
module.exports = {
  login,
  register,
};
