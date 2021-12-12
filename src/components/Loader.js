import React from 'react';

export const Loader = () => {
  return (
    <div className='loader'>
      <iframe
        src='https://giphy.com/embed/XqoisoDHmDYFauS2FR'
        width='480'
        height='400'
        frameBorder='0'
        class='giphy-embed'
        allowFullScreen
        title='theoffice'
      ></iframe>
      <p>
        <a href='https://giphy.com/gifs/theoffice-XqoisoDHmDYFauS2FR'>
          via GIPHY
        </a>
      </p>
    </div>
  );
};
