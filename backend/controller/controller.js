const Orphanage = require("../model/model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.registerOrphanage = async (req, res) => {
  try {
    const {
      orphanagename,
      email,
      ContactNumber,
      address,
      about,
      password,
    } = req.body;
    console.log("api is hitting");
    const existing = await Orphanage.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const orphanage = new Orphanage({
      orphanagename,
      email,
      ContactNumber,
      address,
      about,
      password: hashedPassword,
    });

    await orphanage.save();

    res.status(201).json({
      message: "Orphanage registered successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.loginOrphanage = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login API hit");
    // 1. Check email
    const orphanage = await Orphanage.findOne({ email });
    if (!orphanage) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, orphanage.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 3. Generate JWT
    const token = jwt.sign(
      { id: orphanage._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      orphanage: {
        id: orphanage._id,
        orphanagename: orphanage.orphanagename,
        email: orphanage.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};