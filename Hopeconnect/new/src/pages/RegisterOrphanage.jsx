import { useState } from "react";
import { Link } from "react-router-dom";
import { Building, Mail, Phone, MapPin, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import "./RegisterOrphanage.css";
import { registerOrphanage } from "@/api/orphanageApi";
import { Lock } from "lucide-react";


const RegisterOrphanage = () => {
  const [formData, setFormData] = useState({
   orphanagename: "",
    email: "",
    ContactNumber: "",
    address: "",
    password: "",
    about: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerOrphanage(formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-page">
  <div className="register-container">
    <div className="register-content">
      <div className="register-header">
        <h1 className="register-title">Register Your Orphanage</h1>
        <p className="register-subtitle">
          Join our network and connect with donors who want to help
        </p>
      </div>

      <div className="register-card">
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-row">
            <div className="form-group">
              <Label htmlFor="name">Orphanage Name</Label>
              <div className="input-wrapper">
                <Building className="input-icon" />
                <Input
                  id="name"
                  name="orphanagename"
                  placeholder="Enter orphanage name"
                  value={formData.orphanagename}
                  onChange={handleChange}
                  className="input-with-icon"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <Label htmlFor="email">Email Address</Label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-with-icon"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="input-wrapper">
                <Phone className="input-icon" />
                <Input
                  id="phone"
                  name="ContactNumber"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.ContactNumber}
                  onChange={handleChange}
                  className="input-with-icon"
                  required
                />
              </div>
            </div>
          </div>

          {/* ✅ PASSWORD FIELD ADDED */}
          <div className="form-group">
            <Label htmlFor="password">Password</Label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                className="input-with-icon"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <Label htmlFor="address">Full Address</Label>
            <div className="input-wrapper">
              <MapPin className="input-icon" />
              <Input
                id="address"
                name="address"
                placeholder="Enter complete address"
                value={formData.address}
                onChange={handleChange}
                className="input-with-icon"
                required
              />
            </div>
          </div>

          {/* ✅ FIXED: description ➜ about */}
          <div className="form-group">
            <Label htmlFor="about">About Your Orphanage</Label>
            <div className="input-wrapper">
              <FileText className="textarea-icon" />
              <Textarea
                id="about"
                name="about"
                placeholder="Tell us about your orphanage, the children you care for, and your mission..."
                value={formData.about}
                onChange={handleChange}
                className="textarea-with-icon"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" variant="hero" size="lg">
            Submit Registration
          </Button>
        </form>

        <p className="register-footer">
          Already registered? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default RegisterOrphanage;
