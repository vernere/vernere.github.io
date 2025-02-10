import React, { useRef, useState } from 'react';

const TourCard = ({ image, title, index, info, faId }) => {
  const [isToggled, setIsToggled] = useState(false);

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateY(${-x / 10}deg) rotateX(${y / 10}deg)`;
    card.style.boxShadow = `${x / 10}px ${y / 10}px 20px rgba(0, 0, 0, 0.5)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  };

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`tour-card ${isToggled ? 'toggled' : ''}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="tour-card-image-wrapper">
        <img src={image} alt={title} className="tour-card-image" />
      </div>
      <div className="tour-card-content">
        <h3 className="tour-card-title">{title}</h3>
        <div className="tour-card-underline"></div>
        <p className="tour-card-index">{index.toString().padStart(2, '0')}</p>
        <div className="tour-card-arrow">→</div>
          <i className={faId} style={{color: '#322d47'}} />
        <div className={`tour-card-hidden-content ${isToggled ? 'show' : ''}`}>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;