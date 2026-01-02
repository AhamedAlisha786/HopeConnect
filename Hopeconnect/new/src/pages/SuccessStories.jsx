import { Quote } from "lucide-react";
import "./SuccessStories.css";

const stories = [
  {
    id: 1,
    title: "From School Supplies to Bright Futures",
    orphanage: "Sunshine Children's Home",
    story: "Thanks to generous donors, all 45 children at Sunshine Children's Home received new school supplies, books, and uniforms. This has dramatically improved their attendance and academic performance.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    donorCount: 23,
  },
  {
    id: 2,
    title: "A Warm Winter for Everyone",
    orphanage: "Hope Foundation",
    story: "When winter approached, our community came together to provide warm clothes and blankets to every child at Hope Foundation. No child had to face the cold alone.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
    donorCount: 47,
  },
  {
    id: 3,
    title: "Building Dreams Through Education",
    orphanage: "Little Stars Orphanage",
    story: "A complete library was set up at Little Stars Orphanage with over 500 books donated by our community. Children now have access to worlds of knowledge and imagination.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
    donorCount: 156,
  },
];

const testimonials = [
  {
    id: 1,
    quote: "Seeing the children's faces light up when they received their new books was the most rewarding experience of my life.",
    name: "Sarah Johnson",
    role: "Regular Donor",
  },
  {
    id: 2,
    quote: "HopeConnect made it so easy to find ways to help. I've been donating monthly for a year now.",
    name: "Rajesh Kumar",
    role: "Monthly Supporter",
  },
];

const SuccessStories = () => {
  return (
    <div className="stories-page">
      {/* Header */}
      <section className="stories-header">
        <div className="stories-header-container">
          <div className="stories-header-content">
            <h1 className="stories-title">Success Stories</h1>
            <p className="stories-description">
              Every donation creates a story of hope. See the impact our community has made together.
            </p>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="stories-grid-section">
        <div className="stories-container">
          <div className="stories-grid">
            {stories.map((story) => (
              <article key={story.id} className="story-card">
                <div className="story-card-image">
                  <img src={story.image} alt={story.title} />
                </div>
                <div className="story-card-content">
                  <span className="story-orphanage-tag">{story.orphanage}</span>
                  <h3 className="story-card-title">{story.title}</h3>
                  <p className="story-card-text">{story.story}</p>
                  <p className="story-donor-count">{story.donorCount} donors contributed</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">What Our Donors Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <Quote className="testimonial-icon" />
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
