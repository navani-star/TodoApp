import React, { useState } from "react"
const Validation = () => {
    const [input, setInput] = useState('')
    const [password, setpassword] = useState('')
    const [username, setUsername] = useState('')
    const [message, setmessage] = useState('')
    const EventHandler = (event) => {
        const Newusername = event.target.value
        setInput(Newusername)
        //setInput(event.target.value)

        //Validation Condition
        let charlength = Newusername.length >= 6
        let handlechar = /[@,#,$,*]/.test(Newusername)
        let capitalchar = /^[A-Z]/.test(Newusername)

        if (!charlength) {
            setUsername('Your String Must Be Six Char')
        }
        else if (!handlechar) {
            setUsername('Your String Must Be One Speicial Char')
        }
        else if (!capitalchar) {
            setUsername('Your String Must Be Start With Capital Char')
        }
        else {
            setUsername('String is Valid')
        }

    }
    const Handlepassword = (event) => {
        //setpassword(event.target.value)
        const Newpassword = event.target.value
        setpassword(Newpassword)

        //validation 
        let charlength = Newpassword.length >= 8
        let charspecial = /[@,#,$,*]/.test(Newpassword)
        let capital = /[A-Z]/.test(Newpassword)

        if (!charlength) {
            setmessage('Password Must Be Eight Char ')
        }
        else if (!charspecial) {
            setmessage('Password Must Be Specail Char')
        }
        else if (!capital) {
            setmessage('Password Must Be Start With Capital Letter')
        }
        else {
            setmessage('Password Must Be Valid')
        }

    }
    return (
        <div>
            <div className="bg-dark w-75 mx-auto p-3 mt-3 mb-3">
                <input type="text"
                    placeholder="Enter A Name"
                    className="form-control"
                    value={input}
                    onChange={EventHandler}
                />
                <h1 className="mb-3 fs-4"
                    style={{ color: username === 'String is Valid' ? 'green' : 'red' }}>
                    {/* expression ? 'condition-1 (true)' : 'condition-2 (false)' */}
                    {username}
                </h1>
            </div>
            <div className="bg-dark w-75 mx-auto p-3">
                <input type="text"
                    className="form-control"
                    placeholder="Enter A Password"
                    value={password}
                    onChange={Handlepassword}
                />
                <h1 className="fs-4 mb-3"
                    style={{ color: message === 'Password Must Be Valid' ? 'green' : 'red' }}>
                    {message}</h1>
            </div>
        </div>

    )
}
export default Validation