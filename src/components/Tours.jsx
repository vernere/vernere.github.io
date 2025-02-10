import React from 'react';
import TourCard from './TourCard';
import { tours } from '../data';
import Title from './Title';
import Timeline from './Timeline';
import './TourCard.css';

const events = [
  { year: '2025' },
  { year: '2024' },
  { year: '2024' },
];

const Tours = () => {
  return (
    <section className="section tours" id="tours">
      <Title title='My' subTitle='projects' />
      <div className="timeline-container">
        <Timeline events={events} />
        <div className="section-center featured-center">
          {tours.map((tour, index) => (
            <TourCard key={tour.id} image={tour.image} title={tour.title} index={index} info={tour.info} faId={tour.faId} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;