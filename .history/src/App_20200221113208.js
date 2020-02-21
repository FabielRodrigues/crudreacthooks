import React, { useState } from 'react'
import UserTable from './tables/UserTable'

const App = () => {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="flex-large">
      {editing ? (
        <div>
          <h2>Edit user</h2>
          <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </div>
      ) : (
        <div>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
      )}
  </div>
  )
}

export default App