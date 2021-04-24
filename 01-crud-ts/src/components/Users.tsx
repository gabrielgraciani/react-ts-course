import React, { useState} from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import '../styles/users.scss';

interface IUsers {
  id: number;
  name: string;
  email: string;
}

const Users = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState<IUsers[]>([]);

  const handleCreateUser = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('teste');

    const newUser = {
      id: Math.random() * 1000,
      name,
      email
    };

    setUsers([...users, newUser]);
  }

  const handleDeleteUser = (id: number) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);

  }

  return (
    <div className="container">
      <div className="head">
        <h4>Lista de usuários</h4>

        <form onSubmit={handleCreateUser}>
          <input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
          <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="submit" value="Cadastrar" />
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><button><FiEdit2 /></button></td>
              <td><button onClick={() => handleDeleteUser(user.id)}><FiTrash2 /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users;