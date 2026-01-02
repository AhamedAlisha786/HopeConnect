const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/config");

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "http://localhost:8080",
  credentials: true,
}));

app.use(express.json());

app.use("/api/auth", require("./router/authRoutes"));

app.get("/", (req, res) => {
  res.send("HopeConnect Backend Running");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
