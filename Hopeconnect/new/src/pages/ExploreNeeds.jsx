import { useState } from "react";
import { Search, Filter, Heart, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./ExploreNeeds.css";
import { useNavigate } from "react-router-dom";
const mockNeeds = [
  {
    id: 1,
    orphanage: "Sunshine Children's Home",
    location: "Mumbai, India",
    needs: ["School Supplies", "Clothing", "Books"],
    urgency: "high",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    orphanage: "Hope Foundation",
    location: "Delhi, India",
    needs: ["Medical Supplies", "Food", "Bedding"],
    urgency: "medium",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    orphanage: "Little Stars Orphanage",
    location: "Bangalore, India",
    needs: ["Toys", "Educational Materials", "Furniture"],
    urgency: "low",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    orphanage: "Rainbow Kids Center",
    location: "Chennai, India",
    needs: ["Winter Clothes", "Blankets", "Shoes"],
    urgency: "high",
    image: "https://images.unsplash.com/photo-1594708767771-a7502e23f417?w=400&h=300&fit=crop",
  },
];

const ExploreNeeds = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredNeeds = mockNeeds.filter(
    (item) =>
      item.orphanage.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.needs.some((need) => need.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="explore-page">
      {/* Header */}
      <section className="explore-header">
        <div className="explore-header-container">
          <div className="explore-header-content">
            <h1 className="explore-title">Explore Current Needs</h1>
            <p className="explore-description">
              Discover orphanages that need your support. Every donation, big or small, makes a difference.
            </p>

            {/* Search */}
            <div className="explore-search">
              <div className="explore-search-wrapper">
                <Search className="explore-search-icon" />
                <Input
                  type="text"
                  placeholder="Search by orphanage, location, or need..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="explore-search-input input-with-icon"
                />
              </div>
              <Button variant="outline" size="icon" className="explore-filter-btn">
                <Filter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Needs Grid */}
      <section className="explore-grid-section">
        <div className="explore-grid-container">
          <div className="explore-grid">
            {filteredNeeds.map((item) => (
              <div key={item.id} className="need-card">
                <div className="need-card-image">
                  <img src={item.image} alt={item.orphanage} />
                  <div className={`need-card-urgency ${item.urgency}`}>
                    {item.urgency === "high" ? "Urgent" : item.urgency === "medium" ? "Moderate" : "Standard"}
                  </div>
                </div>

                <div className="need-card-content">
                  <h3 className="need-card-title">{item.orphanage}</h3>
                  <div className="need-card-location">
                    <MapPin />
                    {item.location}
                  </div>

                  <div className="need-card-tags">
                    {item.needs.map((need) => (
                      <span key={need} className="need-tag">
                        <Package />
                        {need}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full" variant="hero" size="sm" onClick={()=>{
                    navigate('/user-register')
                  }}>   
                    <Heart className="h-4 w-4" />
                    Donate Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredNeeds.length === 0 && (
            <div className="explore-empty">
              <p>No results found. Try a different search term.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExploreNeeds;
