import React, { useState, useEffect } from 'react';

import { Loader } from './Loader';

export const TheOfficeList = () => {
  const [officeEpisodes, setOfficeEpisodes] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [ratingInput, setRatingInput] = useState('');
  const [loading, setLoading] = useState(false);

  const THE_OFFICE_URL = `https://project-backend-theoffice.herokuapp.com?season=${textInput}`;

  const THE_OFFICE_URL_RATING = `https://project-backend-theoffice.herokuapp.com?imdb_rating=${ratingInput}`;

  useEffect(() => {
    setLoading(true);
    fetch(THE_OFFICE_URL)
      .then(res => res.json())
      .then(json => setOfficeEpisodes(json));
    setLoading(false);
  }, [THE_OFFICE_URL]);

  useEffect(() => {
    setLoading(true);
    fetch(THE_OFFICE_URL_RATING)
      .then(res => res.json())
      .then(json => setOfficeEpisodes(json));
    setLoading(false);
  }, [THE_OFFICE_URL_RATING]);

  const onSetSeasonInput = event => {
    setTextInput(event.target.value);
  };

  const onSetRatingInput = event => {
    setRatingInput(event.target.value);
  };

  // text colors based on season
  const textColor = season => {
    if (season === 1) {
      return 'blue';
    }
    if (season === 2) {
      return 'green';
    }
    if (season === 3) {
      return 'orange';
    }
    if (season === 4) {
      return 'blueviolet';
    }
    if (season === 5) {
      return 'crimson';
    }
    if (season === 6) {
      return 'black';
    }
    if (season === 7) {
      return 'pink';
    }
    if (season === 8) {
      return 'gray';
    } else {
      return 'coral';
    }
  };

  return (
    <>
      <div className='info-container'>
        {loading && <Loader />}
        <div className='search-container'>
          <form onSubmit={event => event.preventDefault()}>
            <select type='text' value={textInput} onChange={onSetSeasonInput}>
              <option value=''>pick season here</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
            </select>
          </form>
          <p>OR</p>
          <select type='text' value={ratingInput} onChange={onSetRatingInput}>
            <option value=''>pick rating here</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
          </select>
        </div>
        <div className='rating-info-green box'>rating 8 or higher</div>
        <div className='rating-info-red box'>rating 8 or lower</div>
      </div>
      <div className='list-container'>
        {officeEpisodes.map(item => (
          <div
            style={{
              color: textColor(item.season),
            }}
            key={item.title}
            className='show-list'
          >
            <p>
              {item.title} /<span>season: {item.season}</span>/
              {item.original_air_date} /
              <span
                className={
                  item.imdb_rating > 7.9 ? 'high-rating' : 'low-rating'
                }
              >
                {item.imdb_rating} /
              </span>
              <span className='desc'>INFO: {item.desc} </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
