import React from 'react';
import { Link } from 'react-router-dom'

export default class SignUp extends React.Component{

    render(){
        return(
            <div>
                <h1>Signup Page</h1>
                <Link to='/login'>Cancel</Link>
            </div>
        )
    }
}