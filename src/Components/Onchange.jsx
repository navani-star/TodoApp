import React, { useState } from 'react'
const Onchange = () => {
    const[input,setInput]=useState('')
    const[message,setMessage]=useState('')
    
    const Eventhandler=(event)=>{
      setInput(event.target.value)


      
      }
    
    const messageHandler=(e)=>{
       setMessage(e.target.value)

    }
  return (
    <div>
  <h1>Onchange Event in React</h1>
   <div className='bg-dark w-75 mx-auto p-3 rounded-3 mt-3 mb-3'>
          <input type='text'
          placeholder='Enter A Name'
          className='form-control'
          value={input}
           onChange={Eventhandler}
         />  
         <h1 className='text-danger mt-1'>Content Appear Here:-{input}</h1>

         <input type='text'
                className='form-control mt-3 mb-3'
                placeholder='Enter A Message'
                value={message}
                onChange={messageHandler}
         />
         <h1 className='text-danger mt-1'>Message Here:-{message}</h1>
    </div>
</div>
  )
}

export default Onchange