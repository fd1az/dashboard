import React from 'react';
import TableRow from './TableRow';

const Table = () => {
  const tableData = [
    {
      title: 'Billy Elliot',
      length: 123,
      rating: 5,
      genre: ['Drama', 'Comedia'],
      awards: 2,
    },
    {
      title: 'Alice',
      length: 142,
      rating: 4.8,
      genre: ['Drama', 'Acción', 'Comedia'],
      awards: 3,
    },
  ];
  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-body">
          <div class="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Duración</th>
                  <th>Rating</th>
                  <th>Género</th>
                  <th>Premios</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => (
                  <TableRow {...data} />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Título</th>
                  <th>Duración</th>
                  <th>Rating</th>
                  <th>Género</th>
                  <th>Premios</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
