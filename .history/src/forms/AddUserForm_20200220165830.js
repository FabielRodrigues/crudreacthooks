import React, {userState} from 'react'

const AddUserForm = props => {

    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = userState(initialFormState)

    return (
        <form>
            <label>Name</label>
            <input type="text" name='name' value='' />
            <label>Username</label>
            <input type="text" name="username" value='' />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm;