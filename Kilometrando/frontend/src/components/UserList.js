import React, { useEffect, useState } from 'react';
import API from '../services/api';  

function UserList() {
  const [users, setUsers] = useState([]);  

  useEffect(() => {
    API.get('/users')  
      .then(response => {
        setUsers(response.data);  
      })
      .catch(error => {
        console.error("Erro ao buscar usuários:", error);  
      });
  }, []);  

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {/* Exibe a lista de usuários */}
        {users.map(user => (
          <li key={user.id}>{user.name}</li> 
        ))}
      </ul>
    </div>
  );
}

export default UserList;
