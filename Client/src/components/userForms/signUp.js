import React, { useState } from "react";

export default function Signup() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [username, setUsername] = useState(null);

    const handleChange = e => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
        if (e.target.name === "username") {
            setUsername(e.target.value);
        }
        return e;
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = document.getElementById('signup-form') //grab form for reset

        fetch("http://localhost:5000/users/signup", {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        .then(rsp => rsp.json())
        .then(response=>{
            //clear form
            form.reset()    
            //error or success message
            console.log(response)
        })
        
    };
    return (
        <form id='signup-form'>
            <input
                type="text"
                required
                name="email"
                placeholder="email"
                onChange={e => handleChange(e)}
            />
            <input
                type="text"
                required
                name="username"
                placeholder="username"
                onChange={e => handleChange(e)}
            />
            <input
                type="password"
                required
                name="password"
                placeholder="password"
                onChange={e => handleChange(e)}
            />
            <input
                type="submit"
                value="Submit"
                onClick={(e) => handleSubmit(e)}
            />
        </form>
    );
}
