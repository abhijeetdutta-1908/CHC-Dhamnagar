import React from 'react';
import { Hero } from '../components/Hero';
import { Departments } from '../components/Departments';
import { Services } from '../components/Services';
import { Documents } from '../components/Documents';
import { Gallery } from '../components/Gallery';
import { CovidGuidelines } from '../components/CovidGuidelines';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Departments />
      <Documents />
      <Gallery />
      <CovidGuidelines />
    </>
  );
};
