import React from 'react';
import './App.css';
import TopAreaComponent from './views/home/top-area';
import HeroComponent from './views/home/hero';
import ExploreComponent from './views/home/explore';
import ReviewComponent from './views/home/reviews';
import StatistcicsComponent from './views/home/statistics';
import FooterComponent from './views/home/footer';

function App() {
  return (
    <div className="App">
      <TopAreaComponent />
      <HeroComponent />
      <ExploreComponent />
      <StatistcicsComponent />
      <ReviewComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
