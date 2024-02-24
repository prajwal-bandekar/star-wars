import React from 'react';

const ResidentsList = ({ residents }) => {
  return (
    <div className='resident'>
      <h3>Residents:</h3>
      {residents.length > 0 ? (
        <table style={{ borderRadius: '20px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((resident) => (
              <tr key={resident.name}>
                <td>{resident.name}</td>
                <td>{resident.height}</td>
                <td>{resident.mass}</td>
                <td>{resident.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p id='notfound'>No residents found</p>
      )}
    </div>
  );
};

export default ResidentsList;
