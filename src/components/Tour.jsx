import React from 'react';

function Tour({ image, title, date, info, cost, duration, location }) {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} alt={title} className="tour-img" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4 className="tour-title">{title}</h4>
        <p>
          {info.substring(0, 200)}...
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>{location}
          </p>
          <p>from €{cost} </p>
          <p>{duration} days</p>
        </div>
      </div>
    </article>
  );
}

export default Tour;