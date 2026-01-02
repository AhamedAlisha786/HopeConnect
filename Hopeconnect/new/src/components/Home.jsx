import { Link } from "react-router-dom";
import { Heart, Users, HandHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Home.css";

const stats = [
  { icon: Heart, value: "500+", label: "Orphanages Supported" },
  { icon: Users, value: "10,000+", label: "Children Helped" },
  { icon: HandHeart, value: "25,000+", label: "Donations Made" },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Decorative Elements */}
        <div className="hero-decorations">
          <div className="hero-decoration-1" />
          <div className="hero-decoration-2" />
          <div className="hero-dot-1" />
          <div className="hero-dot-2" />
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Heart fill="currentColor" />
              <span>Making a difference together</span>
            </div>

            <h1 className="hero-title">
              Connecting Hearts,{" "}
              <span className="text-gradient">Building Futures</span>
            </h1>

            <p className="hero-description">
              Join us in supporting orphanages and giving every child a brighter tomorrow.
              Your kindness can transform lives.
            </p>

            <div className="hero-buttons">
              <Link to="/explore">
                <Button variant="hero" size="xl">
                  Explore Needs
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/find-orphanages">
                <Button variant="heroOutline" size="xl">
                  Find Orphanages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon">
                  <stat.icon />
                </div>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="how-it-works-header">
            <h2 className="how-it-works-title">How It Works</h2>
            <p className="how-it-works-description">
              Making a difference has never been easier. Follow these simple steps to start your journey of giving.
            </p>
          </div>

          <div className="how-it-works-grid">
            {[
              {
                step: "01",
                title: "Discover Needs",
                description: "Browse through verified orphanages and see what items or support they need most.",
              },
              {
                step: "02",
                title: "Choose to Give",
                description: "Select the orphanage and items you'd like to donate. Every contribution matters.",
              },
              {
                step: "03",
                title: "Make an Impact",
                description: "Your donation reaches children directly, and you can track the difference you've made.",
              },
            ].map((item) => (
              <div key={item.step} className="step-card">
                <span className="step-number">{item.step}</span>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-box">
            <div className="cta-decorations">
              <div className="cta-decoration-1" />
              <div className="cta-decoration-2" />
            </div>

            <div className="cta-content">
              <h2 className="cta-title">Ready to Make a Difference?</h2>
              <p className="cta-description">
                Whether you're an orphanage seeking support or a donor wanting to help,
                we're here to connect you.
              </p>
              <div className="cta-buttons">
                <Link to="/register">
                  <Button variant="secondary" size="lg" className="cta-btn-primary">
                    Register Orphanage
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button variant="ghost" size="lg" className="cta-btn-secondary">
                    Start Donating
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
