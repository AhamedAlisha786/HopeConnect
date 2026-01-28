import "./StoryCard.css";

const HeartIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const StoryCard = ({ title, story, imageUrl, orphanageName, createdAt }) => {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="story-card">
      {imageUrl && (
        <div className="story-image">
          <img src={imageUrl} alt={title} />

          <div className="story-overlay" />

          <div className="story-badge">
            <span>
              <HeartIcon />
              Success Story
            </span>
          </div>
        </div>
      )}

      <div className="story-body">
        <h3 className="story-title">{title}</h3>
        <p className="story-orphanage">{orphanageName}</p>

        <p className="story-text">{story}</p>

        <p className="story-date">{formatDate(createdAt)}</p>
      </div>
    </div>
  );
};

export default StoryCard;
