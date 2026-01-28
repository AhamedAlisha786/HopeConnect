const Donor = require("../model/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.Donorregister = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;
    console.log("api is hitting");
    const existing = await Donor.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const donor = new Donor({
        name,
        email,
      password: hashedPassword,
    });

    await donor.save();
    res.status(201).json({
      message: "Donor registered successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.Donorlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login API hit");
    // 1. Check email
    const donor = await Donor.findOne({ email });
    if (!donor) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, donor.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 3. Generate JWT
    const token = jwt.sign(
      { id: donor._id,role:donor.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      donor: {
        id: donor._id,
        name: donor.name,
        email: donor.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};