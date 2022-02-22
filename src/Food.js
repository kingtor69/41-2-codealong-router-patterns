import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PIXABAY_URL, PIXABAY_KEY } from './keys.js';
import { randomInteger } from './helpers.js'

import './Food.css';

const Food = () => {
  const { name } = useParams();
  const [ src, setSrc ] = useState(null);

  useEffect(() => {
    async function fetchGif(searchTerm) {
      try {
        let res = await axios.get(`${PIXABAY_URL}`, {
          params: { q: searchTerm, key: PIXABAY_KEY, category: 'food' }
        });
        const i = randomInteger(res.data.hits.length);
        setSrc(res.data.hits[i].largeImageURL);
      } catch (e) {
        console.log(e);
      };
    };
    fetchGif(name);
  }, [name]);

  let img = src ? <img src={src} alt={name} /> : null;
  return (
    <div className="Food">
      <h1>{name}</h1>
      {img}
    </div>
  )
};

export default Food;
