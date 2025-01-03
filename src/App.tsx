import React from 'react';
import Portfolio from './components/Portfolio';
import { portfolioData } from './data/portfolio-data';

const App = () => {
  return (
    <div className="min-h-screen text-white">
      <Portfolio data={portfolioData} />
    </div>
  );
};

export default App;