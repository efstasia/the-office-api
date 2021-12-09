import React from 'react';
import styled from 'styled-components';

// const HeaderText = styled.h1`
//   text-align: center;
// `;

export const Header = () => {
  return (
    <div className='header-container'>
      <h1>THE OFFICE</h1>
      <div className='animation-container'>
        <h2>
          <img src='https://i.postimg.cc/2SkLwdrr/dwight.png' /> <span> </span>
        </h2>
      </div>
    </div>
  );
};
