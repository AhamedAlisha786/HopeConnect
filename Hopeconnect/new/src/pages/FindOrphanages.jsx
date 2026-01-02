import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./FindOrphanages.css";

const orphanages = [
  {
    id: 1,
    name: "Sunshine Children's Home",
    location: "123 Hope Street, Mumbai 400001",
    phone: "+91 22 1234 5678",
    email: "contact@sunshinechildren.org",
    children: 45,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Hope Foundation",
    location: "456 Care Avenue, Delhi 110001",
    phone: "+91 11 9876 5432",
    email: "info@hopefoundation.org",
    children: 78,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Little Stars Orphanage",
    location: "789 Dream Lane, Bangalore 560001",
    phone: "+91 80 5555 1234",
    email: "hello@littlestars.org",
    children: 32,
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Rainbow Kids Center",
    location: "321 Love Road, Chennai 600001",
    phone: "+91 44 7777 8888",
    email: "support@rainbowkids.org",
    children: 56,
    image: "https://images.unsplash.com/photo-1594708767771-a7502e23f417?w=400&h=300&fit=crop",
  },
];

const FindOrphanages = () => {
  return (
    <div className="find-page">
      {/* Header */}
      <section className="find-header">
        <div className="find-header-container">
          <div className="find-header-content">
            <h1 className="find-title">Find Orphanages Near You</h1>
            <p className="find-description">
              Connect with verified orphanages in your area and discover how you can make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Orphanages List */}
      <section className="find-list-section">
        <div className="find-list-container">
          <div className="find-grid">
            {orphanages.map((orphanage) => (
              <div key={orphanage.id} className="orphanage-card">
                <div className="orphanage-card-image">
                  <img src={orphanage.image} alt={orphanage.name} />
                </div>

                <div className="orphanage-card-content">
                  <div>
                    <h3 className="orphanage-card-title">{orphanage.name}</h3>
                    <div className="orphanage-card-details">
                      <div className="orphanage-detail">
                        <MapPin />
                        {orphanage.location}
                      </div>
                      <div className="orphanage-detail">
                        <Phone />
                        {orphanage.phone}
                      </div>
                      <div className="orphanage-detail">
                        <Mail />
                        {orphanage.email}
                      </div>
                    </div>
                    <p className="orphanage-children">{orphanage.children} children in care</p>
                  </div>

                  <Button className="orphanage-card-btn" variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindOrphanages;
