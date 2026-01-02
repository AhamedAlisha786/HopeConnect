import { Heart, Package, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Dashboard.css";

const stats = [
  { icon: Heart, label: "Total Donations", value: "$12,450", change: "+12%" },
  { icon: Package, label: "Items Donated", value: "234", change: "+8%" },
  { icon: Users, label: "Donors", value: "89", change: "+23%" },
  { icon: TrendingUp, label: "This Month", value: "$2,340", change: "+15%" },
];

const recentDonations = [
  { donor: "Anonymous", item: "School Supplies", amount: "$150", date: "2 hours ago" },
  { donor: "Sarah J.", item: "Winter Clothes", amount: "$200", date: "5 hours ago" },
  { donor: "Michael R.", item: "Books", amount: "$75", date: "1 day ago" },
  { donor: "Anonymous", item: "Medical Supplies", amount: "$300", date: "2 days ago" },
];

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Dashboard</h1>
            <p className="dashboard-subtitle">Welcome back! Here's your impact overview.</p>
          </div>
          <Button variant="hero">Add New Need</Button>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-card-header">
                <div className="stat-card-icon">
                  <stat.icon />
                </div>
                <span className="stat-card-change">{stat.change}</span>
              </div>
              <p className="stat-card-value">{stat.value}</p>
              <p className="stat-card-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Donations */}
        <div className="donations-card">
          <div className="donations-header">
            <h2 className="donations-title">Recent Donations</h2>
          </div>
          <div className="donations-list">
            {recentDonations.map((donation, index) => (
              <div key={index} className="donation-item">
                <div>
                  <p className="donation-donor">{donation.donor}</p>
                  <p className="donation-item-name">{donation.item}</p>
                </div>
                <div>
                  <p className="donation-amount">{donation.amount}</p>
                  <p className="donation-date">{donation.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
