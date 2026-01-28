import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "./Userlogin.css";
import { loginDonor } from "@/api/donorApi";

const UserLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginDonor(formData);

      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful!");
      // navigate("/user-dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>User Login</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <Label>Email</Label>
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <Input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <Label>Password</Label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <p className="auth-footer">
          Don’t have an account? <Link to="/user-register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
