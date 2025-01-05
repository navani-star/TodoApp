import { useState } from "react"
const Todoapplication = () => {
    const [todos, settodos] =useState([])
    const [item, setItem] =useState('')
    const [description,setdescription] = useState('')
    const [date,setDate] = useState('')
    const [edit,setEdit] =useState(null)
   
    const dataHandler = () => {
        if (item.trim() && description.trim() && date.trim()){
            if(edit!==null){
                const updatedata=[...todos]
                updatedata[edit]={item,description,date}
                settodos(updatedata) //when click on edit button then settodos update the data and holds.. 
                setEdit(null) //Reset Mode(Black Fiels After add the data)
            }
            else{
                settodos([...todos, { id: Date.now(), item, description, date }]); //Normal Data Add
            }
            setItem('')
            setdescription('')
            setDate('')
        }
        else{
            alert('All Fields Are Required')
        }
        //...Spread Operator:-  To Hold the previous Data or Old Data
        // The trim() method in JavaScript is used to remove whitespace from both ends of a string.
    }
    const editHandler=(index)=>{
        const todo=todos[index] //target on the basis of index
        setItem(todo.item)
        setdescription(todo.description)
        setDate(todo.date)
        setEdit(index)
    }
    const deletehandler=(index)=>{
        const deletedata=[...todos]
        deletedata.splice(index,1)
        settodos(deletedata)
    }
    const Completedata=(index)=>{
        const updatedata=[...todos]
        updatedata[index].Completed=!
        updatedata[index].Completed
        settodos(updatedata)
    }
    return (
        <div>
            <h1>Todo Application:-</h1>
            <div className="bg-dark w-75 mx-auto p-3 rounded-3">

                <input type="text"
                    placeholder="Enter A List Name"
                    className="form-control"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />

                <input type="text"
                    placeholder="Enter A List description"
                    className="form-control mt-3"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                />

                <input type="date"
                    className="form-control mt-3"
                    placeholder="Enter Price"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button className="btn btn-success mt-3 w-25" onClick={dataHandler}>
                    {
                        edit!==null ? 'Update Data':' Submit Data'
                    }
                   
                    
                </button>
            </div>
            <div className="w-75 mx-auto mt-5">
                <table className="table border">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((todo,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td style={{textDecoration:todo.Completed?'line-through':'none'}}>{index+1}</td>
                                            <td style={{textDecoration:todo.Completed?'line-through':'none'}}>{todo.item}</td>
                                            <td style={{textDecoration:todo.Completed?'line-through':'none'}}>{todo.description}</td>
                                            <td style={{textDecoration:todo.Completed?'line-through':'none'}}>{todo.date}</td>
                                            <td>
                                                <button className="btn btn-danger me-2" onClick={()=>editHandler(index)}>Edit</button>
                                                <button className="btn btn-warning" onClick={()=>deletehandler(index)}>Delete</button>
                                                <button className="btn btn-primary ms-2" onClick={()=>Completedata(index)}>
                                                    {
                                                        todo.Completed ? 'Undo':'Completed'
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
export default Todoapplication