import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "./Login.css";
import { loginOrphanage } from "@/api/orphanageApi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic
    try {
    const res = await loginOrphanage({ email, password });

    alert(res.data.message);

    // Optional: store JWT token
    localStorage.setItem("token", res.data.token);

  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Log in to continue making a difference</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <Label htmlFor="email">Email</Label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-with-icon"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <Label htmlFor="password">Password</Label>
              <div className="input-wrapper">
                <Lock className="input-icon" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-with-icon"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full" variant="hero" size="lg">
              Log In
            </Button>
          </form>

          <p className="login-footer">
            Don't have an account?{" "}
            <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
