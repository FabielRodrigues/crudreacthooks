import React, { useState } from 'react'
import UserTable from './tables/UserTable'

const App = () => {

  const initialBookState = {
    title: '',
    available: false,
  }

  const [book, setBook] = useState(initialBookState);

  const updateBook = book => {
    setBook({ title: book.title, available: book.available });
  }

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable />
        </div>
      </div>
    </div>
  )
}

export default App