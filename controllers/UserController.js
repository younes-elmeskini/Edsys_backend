const bcrypt = require("bcryptjs");
const prisma = require("../utils/client");
const { generateAcessToken } = require("../middlewares/auth");

const register = async (req, res) => {
  try {
    const { userName, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await prisma.user.create({
      data: {
        userName,
        email,
        password: hashedPassword,
        role: "ADMIN"
      },
    });
    if (!user) {
      return res.status(400).json({ message: "User registration failed" });
    }
    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = generateAcessToken(user);
    res.cookie("token", token, { httpOnly: true, secure: true });
    res.status(200).json({
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
    register,
    login
}
