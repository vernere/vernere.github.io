import React from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event" style={{ top: `${index * 550}px` }}>
          <div className="timeline-dot"></div>
          <div className="timeline-year">{event.year}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;