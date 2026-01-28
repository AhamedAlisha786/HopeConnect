import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "./RegisterUser.css";
import { registerDonor } from "@/api/donorApi";

const RegisterUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerDonor(formData);
      alert(res.data.message || "Registered successfully!");
      navigate("/user-login");
     } catch (err) {
       alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create User Account</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <Label>Name</Label>
            <div className="input-wrapper">
              <User className="input-icon" />
              <Input
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

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
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/user-login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterUser;
