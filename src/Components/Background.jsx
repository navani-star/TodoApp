import { useState } from "react"
const Background=()=>{
    const[bgcolor,setBgcolor]=useState('')

    const bgHandler=(event)=>{
        setBgcolor(event.target.value)
        
    }
    return(
        <div style={{height :'100vh', backgroundColor: bgcolor}}>
            <select className="form-control w-25 mx-auto" onChange={bgHandler}>
                <option value=''>Select Color</option>
                <option value='purple'>Purple Mode</option>
                <option value='black'>Dark Mode</option>
                <option value='red'>Red Mode</option>
                <option value='green'>Green Mode</option>
                <option value='pink'>Pink Mode</option>
            </select>
        </div>
    )
}
export default Background