import React from 'react';
import CardMovie from './CardMovie';

const GenresInDb = () => {
  const genres = [
    'Acción',
    'Animación',
    'Aventura',
    'Ciencia Ficción',
    'Comedia',
    'Documental',
    'Drama',
    'Fantasia',
    'Infantiles',
    'Musical',
  ];
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {genres.map((genero, indx) => (
              <CardMovie genre={genero} key={indx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenresInDb;
