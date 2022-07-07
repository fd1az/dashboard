import React from 'react';

const TableRow = ({ title, length, rating, genre, awards }) => {
  return (
    <tr>
      <th>{title}</th>
      <td>{length}</td>
      <td>{rating}</td>
      <td>
        <ul>
          {genre?.map((g) => (
            <li>{g}</li>
          ))}
        </ul>
      </td>
      <td>{awards}</td>
    </tr>
  );
};

export default TableRow;
