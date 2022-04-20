import React, { useState, useEffect } from 'react';
import './App.css';

function getIndex(index, x, arryLength, isPrev = false) {
  // https://bobbyhadz.com/blog/javascript-convert-positive-number-to-negative
  x = (isPrev) ? -Math.abs(x) : Math.abs(x);
  const nextNdx = (arryLength + (index + x))% arryLength;
  console.log(
    `(${arryLength} + (${index} + ${x}))% ${arryLength} =`,
    (arryLength + (index + x))% arryLength
  );
  return nextNdx;
}

const Button = ({ text, className, onClick, onSelect }) => (
  <button  className={className}>
    <span onClick={onClick}>{text}</span>
    <select onChange={onSelect}>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  </button>
);

export default () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [xLeft, setXLeft] = useState(1);
  const [xRight, setXRight] = useState(1);

  const items = [1,2,3,4,5,6,7,8,9,10];

  const goRight = () => {
    setCurrentIndex(
      getIndex(
        currentIndex,  
        xRight,
        items.length
      )
    );
  };
  const goLeft = () => {
    setCurrentIndex(
      getIndex(
        currentIndex, 
        xLeft,
        items.length,
        true    
      )
    );  
  };
  const handleSelectLeft = (e) => {
    setXLeft(e.target.value);
  }
  const handleSelectRight = (e) => {
    setXRight(e.target.value);
  }

  return (
    <main>

      <Button
        text="Right"
        className="btnRight"
        onClick={goRight}
        onSelect={handleSelectRight}
      />
      
      <div className="items">
        {items.map((item,i) => 
          <div 
            key={`item-${item}`}
            className={`item${i===currentIndex ? " current" : ""}`}
          >
            <span>{item}</span>
          </div>
        )}
      </div>

      <Button
        text="Left"
        className="btnLeft"
        onClick={goLeft}
        onSelect={handleSelectLeft}
      />

    </main>
  );
}
