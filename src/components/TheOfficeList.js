import React, { useState, useEffect } from 'react';

export const TheOfficeList = () => {
  const [officeEpisodes, setOfficeEpisodes] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [ratingInput, setRatingInput] = useState('');

  const THE_OFFICE_URL = `https://project-backend-theoffice.herokuapp.com?season=${textInput}`;

  const THE_OFFICE_URL_RATING = `https://project-backend-theoffice.herokuapp.com?imdb_rating=${ratingInput}`;

  useEffect(() => {
    fetch(THE_OFFICE_URL)
      .then(res => res.json())
      .then(json => setOfficeEpisodes(json));
  }, [THE_OFFICE_URL]);

  useEffect(() => {
    fetch(THE_OFFICE_URL_RATING)
      .then(res => res.json())
      .then(json => setOfficeEpisodes(json));
  }, [THE_OFFICE_URL_RATING]);

  const onSetSeasonInput = event => {
    setTextInput(event.target.value);
  };

  console.log(setTextInput);

  return (
    <>
      <div className='info-container'>
        <div className='search-container'>
          <input
            className='input-container'
            onChange={onSetSeasonInput}
            value={textInput}
            type='number'
            placeholder='season number..'
          />
          {/* <button
            className='input-button'
            onClick={e => setTextInput(e.target.value)}
          >
            search
          </button> */}
          <p>OR</p>
          <input
            className='input-container'
            onChange={event => setRatingInput(event.target.value)}
            value={ratingInput}
            type='number'
            placeholder='rating..'
          />
          {/* <button
            className='input-button'
            onClick={e => setRatingInput(e.target.value)}
          >
            search
          </button> */}
        </div>
        <div className='rating-info-green box'>rating 8 or higher</div>
        <div className='rating-info-red box'>rating 8 or lower</div>
        <div className='season-info-orange box'>season 1-5</div>
        <div className='season-info-pink box'>season 6-9</div>
      </div>
      <div className='list-container'>
        {officeEpisodes.map(item => (
          <div key={item.title} className='show-list'>
            <p>
              {item.title} /
              <span
                className={
                  item.season === 1 ||
                  item.season === 2 ||
                  item.season === 3 ||
                  item.season === 4 ||
                  item.season === 5
                    ? 'season-one-five'
                    : 'season-six-nine'
                }
              >
                {' '}
                season: {item.season}
              </span>{' '}
              /{item.original_air_date} /
              <span
                className={
                  item.imdb_rating > 7.9 ? 'high-rating' : 'low-rating'
                }
              >
                {item.imdb_rating}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
