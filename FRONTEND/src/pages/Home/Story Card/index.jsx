import React from 'react';
import './index.css';

const isVideoUrl = (url) => /\.(mp4|webm|ogg)$/i.test(url);

const StoryCard = ({ story, onClick, index }) => {
    const firstSlide = story.slides[index || 0];
    // Destructuring
    const { imageUrl, title, description } = firstSlide;

    return (
        <div className="story-card" onClick={onClick}>
            {imageUrl && (
                isVideoUrl(imageUrl) ? (
                    <video src={imageUrl} className="story-image"
                    // controls
                    autoPlay
                    loop
                    muted
                    />
                ) : (
                    <img src={imageUrl} alt={title} className="story-image" />
                )
            )}
            <h3 className="story-title">{title}</h3>
            <p className="story-description">{description}</p>
        </div>
    );
};

export default StoryCard;
