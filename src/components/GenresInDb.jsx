import React from 'react';
import { useFetch } from '../hooks';
import CardMovie from './CardMovie';

const GenresInDb = () => {
  const { data: genresList } = useFetch('http://localhost:3001/api/genres');

  const changeFondo = () => {
    let h5 = document.querySelector('.fondito');
    h5.classList.toggle('bg-secondary');
  };

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5
            onMouseOver={() => changeFondo()}
            onMouseLeave={() => changeFondo()}
            className="m-0 font-weight-bold text-gray-800 fondito"
          >
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {genresList?.data.map((genero) => (
              <CardMovie genre={genero.name} key={genero.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenresInDb;
