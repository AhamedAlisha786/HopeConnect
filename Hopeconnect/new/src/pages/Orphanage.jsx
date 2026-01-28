import { useState } from "react";
import NeedCard from "../components/NeedCard.jsx";
import StoryCard from "../components/StoryCard.jsx";
import "./Orphanage.css";
import { createNeed,createSuccessStory } from "../api/needApi.js";

/* ---------------- Icons ---------------- */
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

/* ---------------- Component ---------------- */
const Orphanage = () => {
  const [activeTab, setActiveTab] = useState("needs");

  const [profile] = useState({
    orphanage_name: "Hope Orphanage",
  });

  const [myNeeds, setMyNeeds] = useState([]);

  /* ---------- Form State ---------- */
  const [needData, setNeedData] = useState({
    title: "",
    description: "",
    category: "",
    urgency: "",
    targetAmount: "",
    imageUrl: "",
  });

  const [myStories, setMyStories] = useState([]);

  const [storyData, setStoryData] = useState({
    title: "",
    relatedNeed: "",
    story: "",
    imageUrl: "",
  });
  const [editingId, setEditingId] = useState(null);

const handleEditNeed = (need) => {
  setNeedData({
    title: need.title,
    description: need.description,
    category: need.category,
    urgency: need.urgency,
    targetAmount: need.targetAmount,
    imageUrl: need.imageUrl || "",
  });

  setEditingId(need.id);
};

  const handleChange = (e) => {
    setNeedData({ ...needData, [e.target.name]: e.target.value });
  };

const handleCreateNeed = async (e) => {
  e.preventDefault();

  try {
    const res = await createNeed(needData); // API call

    // Add backend response to UI
    setMyNeeds([res.data.data, ...myNeeds]);

    // Reset form
    setNeedData({
      title: "",
      description: "",
      category: "",
      urgency: "",
      targetAmount: "",
      imageUrl: "",
    });

  } catch (error) {
    console.error("Create need failed:", error.response?.data || error.message);
    alert("Failed to create need");
  }
};


  const handleStoryChange = (e) => {
  setStoryData({ ...storyData, [e.target.name]: e.target.value });
};

const handleCreateStory = async (e) => {
  e.preventDefault();

  try {
    const res = await createSuccessStory(storyData);

    setMyStories([res.data.data, ...myStories]);

    setStoryData({
      title: "",
      relatedNeed: "",
      story: "",
      imageUrl: "",
    });

  } catch (error) {
    console.error("Create story failed:", error.response?.data || error.message);
    alert("Failed to create success story");
  }
};

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <h1 className="title">Welcome, {profile.orphanage_name}</h1>

        {/* Tabs */}
        <div className="tabs">
          <button className={activeTab === "needs" ? "active" : ""} onClick={() => setActiveTab("needs")}>
            My Needs
          </button>
          <button className={activeTab === "stories" ? "active" : ""} onClick={() => setActiveTab("stories")}>
            Success Stories
          </button>
        </div>

        {/* Needs Tab */}
        {activeTab === "needs" && (
          <>
            {/* --------- FORM --------- */}
            <div className="card">
              <h2>Post a New Need</h2>
              <p className="subtext">Share what your orphanage needs with our caring community</p>

              <form className="form-grid" onSubmit={createNeed}>
                <div>
                  <label>Title</label>
                  <input
                    name="title"
                    placeholder="e.g., School supplies for 50 children"
                    value={needData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Category</label>
                  <select name="category" value={needData.category} onChange={handleChange} required>
                    <option value="">Select category</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="food">Food & Nutrition</option>
                    <option value="clothing">Clothing</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="full">
                  <label>Description</label>
                  <textarea
                    name="description"
                    placeholder="Describe your need in detail..."
                    value={needData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Urgency Level</label>
                  <select name="urgency" value={needData.urgency} onChange={handleChange} required>
                    <option value="">Select urgency</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>

                <div>
                  <label>Target Amount ($)</label>
                  <input
                    name="targetAmount"
                    type="number"
                    placeholder="e.g., 500"
                    value={needData.targetAmount}
                    onChange={handleChange}
                  />
                </div>

                <div className="full">
                  <label>Image URL (optional)</label>
                  <input
                    name="imageUrl"
                    placeholder="https://example.com/image.jpg"
                    value={needData.imageUrl}
                    onChange={handleChange}
                  />
                </div>

               <button className="btn">
                    <PlusIcon />
                    {editingId ? "Update Need" : "Post Need"}
                  </button>
              </form>
            </div>

            {/* --------- NEEDS LIST --------- */}
            <div className="grid">
              {myNeeds.map((need) => (
                <NeedCard
                  key={need.id}
                  {...need}
                  onEdit={() => handleEditNeed(need)}
                  onDelete={() =>
                    setMyNeeds(myNeeds.filter((n) => n.id !== need.id))
                  }
                />
              ))}
            </div>
          </>
        )}

        {/* Stories tab can stay as-is */}
        {activeTab === "stories" && (
  <>
    {/* -------- FORM -------- */}
    <div className="card">
      <h2>✨ Share a Success Story</h2>
      <p className="subtext">
        When a need is fulfilled, share the impact with our community
      </p>

      <form className="form-grid" onSubmit={createStory}>
        <div className="full">
          <label>Title</label>
          <input
            name="title"
            placeholder="e.g., New books bring smiles to our children!"
            value={storyData.title}
            onChange={handleStoryChange}
            required
          />
        </div>

        <div className="full">
          <label>Related Need (optional)</label>
          <select
            name="relatedNeed"
            value={storyData.relatedNeed}
            onChange={handleStoryChange}
          >
            <option value="">Select a fulfilled need</option>
            {myNeeds.map((need) => (
              <option key={need.id} value={need.title}>
                {need.title}
              </option>
            ))}
          </select>
        </div>

        <div className="full">
          <label>Your Story</label>
          <textarea
            name="story"
            placeholder="Tell us about the impact and how it changed lives..."
            value={storyData.story}
            onChange={handleStoryChange}
            required
          />
        </div>

        <div className="full">
          <label>Image URL (optional)</label>
          <input
            name="imageUrl"
            placeholder="https://example.com/success-photo.jpg"
            value={storyData.imageUrl}
            onChange={handleStoryChange}
          />
        </div>

        <button className="btn-orange">✨ Share Story</button>
      </form>
    </div>

    {/* -------- STORY LIST -------- */}
    {myStories.length === 0 ? (
      <div className="empty-box">
        <p>No success stories yet. Share one when a need is fulfilled!</p>
      </div>
    ) : (
      <div className="grid">
        {myStories.map((story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </div>
    )}
  </>
)}
    </div>
    </div>
  );
};

export default Orphanage;
