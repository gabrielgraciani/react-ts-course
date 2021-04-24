import '../styles/users.scss';

const Users = () => {
  return (
    <div className="container">
      <div className="head">
        <h4>Lista de usuários</h4>

        <form>
          <input placeholder="Nome" />
          <input placeholder="Email" />
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
          <tr>
            <td>1</td>
            <td>Gabriel</td>
            <td>gabriel@hotmail.com</td>
            <td>Editar</td>
            <td>Excluir</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Gabriel</td>
            <td>gabriel@hotmail.com</td>
            <td>Editar</td>
            <td>Excluir</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Users;