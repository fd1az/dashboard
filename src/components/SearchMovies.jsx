import React, { useState, useEffect, useRef } from 'react';
const apiKey = 'a2626ce5';

function SearchMovies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('star+wars');
  const inputSearch = useRef();

  const keyword = 'PELÍCULA DEMO';

  useEffect(() => {
    const endpoint = `https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies([...data.Search]);
        } else {
          setMovies([]);
        }
      });
  }, [search]);

  const searchMovie = (e) => {
    e.preventDefault();
    const value = inputSearch.current.value;
    setSearch(value);
    inputSearch.current.value = '';
  };
  // Credenciales de API
  // Intenta poner cualquier cosa antes para probar

  return (
    <div className="container-fluid">
      {apiKey !== '' ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET" onSubmit={searchMovie}>
                <div className="form-group">
                  <label htmlFor="">Buscar por título:</label>
                  <input
                    ref={inputSearch}
                    type="text"
                    className="form-control"
                  />
                </div>
                <button className="btn btn-info">Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Películas para la palabra: {keyword}</h2>
            </div>
            {/* Listado de películas */}
            {movies.length > 0 &&
              movies.map((movie, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {movie.Title}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={movie.Poster}
                            alt={movie.Title}
                            style={{
                              width: '90%',
                              height: '400px',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                        <p>{movie.Year}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {movies.length === 0 && (
            <div className="alert alert-warning text-center">
              No se encontraron películas
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-danger text-center my-4 fs-2">
          Eyyyy... ¿PUSISTE TU APIKEY?
        </div>
      )}
    </div>
  );
}

export default SearchMovies;
