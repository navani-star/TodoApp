import React, { useState } from 'react'
const Apptodo = () => {
    const [todos, setTodos] = useState([])
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [salery, setSalery] = useState('')
    const [edit, setEdit] = useState(null)

    const dataHandler = () => {
        if (name.trim() && role.trim() && salery.trim()) {
            if (edit !== null) {
                const updatedata = [...todos]
                updatedata[edit] = { name, role, salery }
                setTodos(updatedata)
                setEdit(null) //Reset Mode Or filds black mode.....
            }
            else {
                setTodos([...todos, { id: Date.now(), name, role, salery }])
            }
            //Clear All Fields...
            setName('')
            setRole('')
            setSalery('')
        }
        else {
            alert('All Fields Are Required')
        }

    }
    //data Existing Call on the basis of index
    const editHandler = (index) => {
        const todo = todos[index]
        console.log(todos)
        setName(todo.name)
        setRole(todo.role)
        setSalery(todo.salery)
        setEdit(index)
    }
    return (
        <div>
            <h1>Todo Application</h1>
            <div className='bg-dark w-75 mx-auto p-3 mt-2'>
                <input type='text'
                    className='form-control'
                    placeholder='Enter A Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type='text'
                    className='form-control mt-2'
                    placeholder='Enter A Role'
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />

                <input type='number'
                    className='form-control mt-2'
                    placeholder='Enter A Salery'
                    value={salery}
                    onChange={(e) =>setSalery(e.target.value)}
                />
                <button className='btn btn-danger mt-3 w-25 fs-5'onClick={dataHandler}>
                    {
                        edit !== null ? 'Update Data' : 'Submit Data'
                        //   (condtion)?'true':'false'[ternary operator]
                    }
                </button>
            </div>
            <div>
                <table className='table border mt-5 w-75 mx-auto'>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Salery</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((todo, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{todo.name}</td>
                                        <td>{todo.role}</td>
                                        <td>{todo.salery}</td>
                                        <td>
                                            <button onClick={() => editHandler(index)} className='btn btn-warning me-1'>Edit</button>
                                            <button className='btn btn-success'>Delete</button>
                                        </td>
                                    </tr>
                                )
                           })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Apptodo