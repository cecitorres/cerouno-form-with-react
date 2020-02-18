import React from 'react';

const PreviewData = props => {
  const users = props.data.map((user, idx) => (
    <div key={idx}>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </div>
  ));
  return (
    <div className="col-4">
      Usuarios capturados
      {users}
    </div>
  );
}

export default PreviewData;