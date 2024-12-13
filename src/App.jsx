import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const categories = [
    { title: 'STRENGTH', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438' },
    { title: 'MOBILITY', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a' },
    { title: 'DRILLS', image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241' },
  ];

  return (
    <div className="container">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`card ${hoveredIndex === index ? 'expanded' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="title">{category.title}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
