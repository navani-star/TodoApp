import { useState } from "react"
const Todoapplication = () => {
    const [todos, settodos] =useState([])
    const [item, setItem] =useState('')
    const [description,setdescription] = useState('')
    const [date,setDate] = useState('')

    const dataHandler = () => {
        if (item.trim() && description.trim() && date.trim()){
            settodos([...todos, { id: Date.now(), item, description, date }]);
            setItem('')
            setdescription('')
            setDate('')
        }
        //...Spread Operator:-  To Hold the previous Data or Old Data
        // The trim() method in JavaScript is used to remove whitespace from both ends of a string.

    }
    return (
        <div>
            <h1>Todo Application:-</h1>
            <div className="bg-dark w-75 mx-auto p-3">

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
                <button className="btn btn-success mt-3 w-25" onClick={dataHandler}>Add Data</button>
            </div>
            <div className="w-75 mx-auto mt-5">
                <table className="table border">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((todo,index)=>{
                                    return(
                                        <tr key={todo.id}>
                                            <td>{index+1}</td>
                                            <td>{todo.item}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.date}</td>
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