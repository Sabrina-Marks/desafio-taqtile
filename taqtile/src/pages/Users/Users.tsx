import React from 'react'
import './Users.css'

function Users() {

  const users = [
    { id: 1, username: 'João', email: 'joao@gmail.com' },
    { id: 2, username: 'Pedro', email: 'pedro@gmail.com' },
    { id: 3, username: 'Joana', email: 'joana@gmail.com' },
    { id: 4, username: 'Pietra', email: 'pietra@gmail.com' }
  ];

  return (
    <div className="users-container">
    <h1>Lista de Usuários</h1>
    <div className="cards-container">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <h2 className="card-title">{user.username}</h2>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Users;