import "./NeedCard.css";

const MapPinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const NeedCard = ({
  title,
  description,
  category,
  urgency,
  targetAmount,
  currentAmount = 0,
  orphanageName,
  location,
  imageUrl,
  createdAt,
  onDelete,
  onEdit
}) => {
  const progress = targetAmount ? (currentAmount / targetAmount) * 100 : 0;

  const urgencyClasses = {
    high: "badge-high",
    medium: "badge-medium",
    low: "badge-low",
  };

  const categoryClasses = {
    education: "badge-education",
    healthcare: "badge-healthcare",
    food: "badge-food",
    clothing: "badge-clothing",
    infrastructure: "badge-infrastructure",
    other: "badge-other",
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="need-card">
      {imageUrl && (
        <div className="need-card-image">
          <img src={imageUrl} alt={title} />
          <span className={`badge ${urgencyClasses[urgency]}`}>
            {urgency} priority
          </span>
        </div>
      )}

      <div className="need-card-body">
        <div className="badge-row">
          <span className={`badge ${categoryClasses[category]}`}>{category}</span>
          {!imageUrl && (
            <span className={`badge ${urgencyClasses[urgency]}`}>{urgency}</span>
          )}
        </div>

        <h3 className="need-title">{title}</h3>
        <p className="need-description">{description}</p>

        <div className="need-meta">
          <span className="orphanage-name">{orphanageName}</span>
          {location && (
            <span className="location">
              <MapPinIcon /> {location}
            </span>
          )}
        </div>

        {targetAmount && (
          <div className="progress-section">
            <div className="amount-row">
              <strong>${currentAmount.toLocaleString()}</strong>
              <span>of ${targetAmount.toLocaleString()}</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="need-footer">
      <div className="footer-left">
        <ClockIcon />
        Posted {formatDate(createdAt)}
      </div>

      <div className="footer-actions">
        <button className="edit-btn" onClick={onEdit}>Edit</button>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </div>
    </div>
  );
};

export default NeedCard;
