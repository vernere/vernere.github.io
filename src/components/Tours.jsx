import React from 'react';
import TourCard from './TourCard';
import { tours } from '../data';
import Title from './Title';
import './TourCard.css';

const Tours = () => {
  return (
    <section className="section tours" id="tours">
      <Title title='My' subTitle='projects' />
      <div className="section-center featured-center">
        {tours.map((tour, index) => (
          <TourCard key={tour.id} image={tour.image} title={tour.title} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Tours;