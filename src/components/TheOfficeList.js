import React, { useState, useEffect } from 'react';

export const TheOfficeList = () => {
  const [officeEpisodes, setOfficeEpisodes] = useState([]);

  const THE_OFFICE_URL = `https://project-backend-theoffice.herokuapp.com/`;

  useEffect(() => {
    fetch(THE_OFFICE_URL)
      .then(res => res.json())
      .then(json => setOfficeEpisodes(json), []);
  });
  console.log(officeEpisodes);
  return (
    <div>
      <p>TEST</p>
      {officeEpisodes.forEach(item => (
        <div key={item}>
          <p>{item}</p>
        </div>
      ))}
      {/* <p>title: {officeEpisodes.title}</p> */}
    </div>
  );
};

// const [officeEpisodes, setOfficeEpisodes] = useState(['one, two']);

//   const THE_OFFICE_URL = `https://project-backend-theoffice.herokuapp.com/episodes`;
//   console.log(THE_OFFICE_URL);

//   return (
//     <div>
//       <p>test</p>

//       {/* {officeEpisodes.map((officeEpisode, index) => {
//         return <div key='index'>{officeEpisode.desc}</div>;
//       })} */}
//       {/* {API_fetch.map(episode => {
//         return (
//           <div>
//             <p>{episode.episodes}</p>
//           </div>
//         );
//       })} */}
//     </div>
//   );
//   // return (
//   //   <div>
//   //     {episodes.episodes.map(episode => {
//   //       <div>
//   //         <p>{episode.episodes}</p>
//   //       </div>;
//   //     })}
//   //   </div>
//   // );
