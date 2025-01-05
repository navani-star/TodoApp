import React, { useState } from 'react'
const Emptodo =()=>{
const [todos,setTodos]=useState([])
const[name,setName]=useState('')
const[role,setRole]=useState('')
const[salery,setSalery]=useState('')
const[edit,setEdit]=useState(null)
const dataHandler=()=>{
    if(name.trim() && role.trim() && salery.trim()){
        if(edit!=null){
            const updatedata=[...todos]
            updatedata[edit]={name,role,salery}
            setEdit(null)
            setTodos(updatedata)
        }
        else{
            setTodos([...todos ,{ id:Date.now() ,name,role,salery}])
        }
        setName('')
        setRole('')
        setSalery('')
    }
    else{
        alert('All Fields Are Required')
    }

    }
        const editHandler=(index)=>{
        //Call The Data on the basis of index in fields..
        const todo=todos[index]
        setName(todo.name)
        setRole(todo.role)
        setSalery(todo.salery)
        setEdit(index)
    }
    const deleteHandler=(index)=>{
        const deletedata=[...todos]
        deletedata.splice(index,1)
        setTodos(deletedata)

    }
    const dataComplete=(index)=>{
        const updatedata=[...todos]
        updatedata[index].Completed=!
        updatedata[index].Completed
        setTodos(updatedata)
    }
  return (
    <div>
        <h1>Employee Todo Application</h1>
        <div className='bg-dark w-75 mx-auto p-3 rounded-3'>
            <input type='text'
                   className='form-control'
                   placeholder='Enter A Name'
                   onChange={(e)=>setName(e.target.value)}
                   value={name}
            />
            <input type='text'
                   className='form-control mt-3'
                   placeholder='Enter A Position'
                   onChange={(e)=>setRole(e.target.value)}
                   value={role}
             />
            <input type='number' 
                  className='form-control mt-3'
                  placeholder='Enter A Salery'
                   onChange={(e)=>setSalery(e.target.value)}
                   value={salery}
            />
            <button className='btn btn-danger mt-3 w-25 rounded-3' onClick={dataHandler}>
                {
                    edit!=null? 'Update Data':'Submit Data'
                }
            </button>
        </div>
        <div className='w-75 mx-auto mt-3'>
            <table className='table border'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Salery</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo,index)=>{
                            return(
                                <tr key={index}>
                                    <td style={{textDecoration:todo.Completed?'line-through':'none'}}>{index+1}</td>
                                    <td style={{textDecoration:todo.Completed?'line-through':'none'}}>{todo.name}</td>
                                    <td style={{textDecoration:todo.Completed?'line-through':'none'}}>{todo.role}</td>
                                    <td style={{textDecoration:todo.Completed?'line-through':'none'}}>{todo.salery}</td>
                                    <td>
                                        <button className='btn btn-success me-1' onClick={()=>editHandler(index)}>Edit</button>
                                        <button className='btn btn-warning' onClick={()=>deleteHandler(index)}>Delete</button>
                                        <button className='btn btn-info ms-1' onClick={()=>dataComplete(index)}>
                                            {
                                              todo.Completed?'Undo':'Completed'
                                            }
                                          </button>
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
export default Emptodo