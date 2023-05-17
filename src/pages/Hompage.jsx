import React from 'react';
import { Banner, Features, Improvement, Service, Stats, Team, Testimonial } from '../containers';

const Hompage = () => {
  return (
    <div className='homepage'>
      <Banner />
      <Features />
      <Improvement />
      <Service />
      <Team />
      <Stats />
      <Testimonial />
    </div>
  )
}

export default Hompage