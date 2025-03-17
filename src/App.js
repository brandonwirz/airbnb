import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />; //key unique anytime using map
  });

  return (
    <div>
      <Navbar />
      <Hero className="hero-img" />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
