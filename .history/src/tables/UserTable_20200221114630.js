import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Usuário</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Editar
              </button>  &nbsp;&nbsp;
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Deletar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Nenhum usuário cadastrado</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable