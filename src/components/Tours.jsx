import React from 'react';
import TourCard from './Tour';
import { tours } from '../data';
import Title from './Title'


const Tours = () => {
  return (
    <section className="section tours" id="tours">
      <Title title='My' subTitle='projects' />
      <div className="section-center featured-center">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;