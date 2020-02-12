import React, { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleChange = e => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }

        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = document.getElementById('login-form') //clear form without refreshing page
        fetch("http://localhost:5000/users/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(rsp => rsp.json())
            .then(response => {
                form.reset()
                //jwt token or error message
                return console.log(response);
            });
    };
    return (
        <div>
            <form id='login-form'>
                <input
                    type="text"
                    required
                    name="email"
                    placeholder="email"
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
        </div>
    );
}
