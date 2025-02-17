const insertingRow = require("../services/insertingRow");
const checkUserExist = require("../modules/checkUserExist");
async function registerController(req, res) {
  const { fullName, email, password, role } = req.body;

  // check user exist
  const { data: isUserExist, message } = await checkUserExist(email);

  // if user dont exist add it in database
  if (!isUserExist || isUserExist.length === 0) {
    const userDetails = {
      full_name: fullName,
      email,
      password,
      role,
    };

    const { data, error } = await insertingRow(userDetails, "users");

    if (error) return res.status(400).json({ message: "Failed to signup" });

    return res.status(200).json({ message: "User registered successfully" });
  }
  // if exist return message with status 400
  return res.status(400).json({ message: message });
}

// LOGIN ENDPOINT
async function loginController(req, res) {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Email and password are required" });

  const { data: isUserExist, message } = await checkUserExist(email, password);

  if (!isUserExist || isUserExist.length === 0)
    return res.status(400).json({ message: message });

  return res.status(200).json({ message: message, user: isUserExist });
}

// USER EXIST
async function userExist(req, res) {
  const { email, password } = req.body?.[0];

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "User does not exist", isAuthenticated: false });

  const { data: isUserExist, message } = await checkUserExist(email, password);

  if (!isUserExist || isUserExist.length === 0)
    return res
      .status(400)
      .json({ message: "User Does not exist", isAuthenticated: false });

  return res
    .status(200)
    .json({ message: message, user: isUserExist, isAuthenticated: true });
}

module.exports = { registerController, loginController, userExist };
