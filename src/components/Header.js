import React from 'react';

export const Header = () => {
  return (
    <div className='header-container'>
      <h1>THE OFFICE</h1>
      <div className='animation-container'>
        <h2>
          <img
            alt='dwightschrute'
            src='https://i.postimg.cc/2SkLwdrr/dwight.png'
          />
          <span className='animation-span'> </span>
        </h2>
      </div>
    </div>
  );
};
