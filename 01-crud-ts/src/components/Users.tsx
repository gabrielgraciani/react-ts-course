import React, { useState} from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import '../styles/users.scss';

interface IUser {
  id: number;
  name: string;
  email: string;
}

const Users = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState<IUser[]>([]);
  const [userSelected, setUserSelected] = useState<IUser>();

  const handleCreateUser = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('teste');

    const newUser = {
      id: Math.random() * 1000,
      name,
      email
    };

    setUsers([...users, newUser]);
    setName('');
    setEmail('');
  }

  const handleDeleteUser = (id: number) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  const handleEditUser = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedUsers = users.map((user) => user.id === userSelected?.id ? userSelected : user);
    setUsers(updatedUsers);
    setUserSelected(undefined);
  }

  return (
    <div className="container">
      <div className="head">
        <h4>Lista de usuários</h4>

        {userSelected ? (
          <form onSubmit={handleEditUser}>
            <input name="name" value={userSelected.name} onChange={(e) => setUserSelected({ ...userSelected, name: e.target.value})} placeholder="Nome" />
            <input name="email" value={userSelected.email} onChange={(e) => setUserSelected({ ...userSelected, email: e.target.value})} placeholder="Email" />
            <input type="submit" value="Editar" />
          </form>
        ) : (
          <form onSubmit={handleCreateUser}>
            <input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="submit" value="Cadastrar" />
          </form>
        )}   
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
              <td><button onClick={() => setUserSelected(user)}><FiEdit2 /></button></td>
              <td><button onClick={() => handleDeleteUser(user.id)}><FiTrash2 /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users;