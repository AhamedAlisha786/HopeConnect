import { Heart, Target, Users, Shield } from "lucide-react";
import "./AboutUs.css";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every child deserves love and care. We put their needs at the center of everything we do.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "We ensure every donation reaches those who need it most with complete accountability.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Together, we're building a network of caring individuals committed to making a difference.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "All orphanages on our platform are verified to ensure your contributions create real impact.",
  },
];

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    name: "Arjun Patel",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    name: "Maya Singh",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
];

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-header">
        <div className="about-header-container">
          <div className="about-header-content">
            <h1 className="about-title">About HopeConnect</h1>
            <p className="about-subtitle">
              We're on a mission to connect generous hearts with children who need them most.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <h2 className="story-title">Our Story</h2>
            <p className="story-text">
              HopeBridge is dedicated to building a bridge between generosity and need — a platform 
              where compassion finds the most deserving homes. Our mission is to ensure that orphanages never struggle silently 
              for basic necessities such as food, clothing, education, medical aid, and emotional care. We strive to create a transparent, trustworthy, and accessible system where every orphanage can openly share 
              its genuine requirements, and kind-hearted individuals can contribute in the way they are comfortable — whether through financial support, donating essential items, or volunteering their time and skills.
            </p>
            <p className="story-text">
              Beyond providing a space for donations, HopeBridge stands for dignity and fairness. Every orphanage, regardless of size or location, deserves equal visibility and support. We make charitable giving personal, 
              impact-driven, and accountable — ensuring that donors can see where their contribution is going and how it is transforming lives. With HopeBridge, every act of kindness becomes a story of hope — ensuring that no child is deprived of warmth, 
              care, education, and love simply because they were born without a family. Together, we believe we can give every child the chance to dream, grow, and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="values-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.title} className="value-item">
                <div className="value-icon">
                  <value.icon />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="team-container">
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-member">
                <img src={member.image} alt={member.name} className="team-member-image" />
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
