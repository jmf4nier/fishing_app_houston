import React from 'react';
import {Link} from 'react-router-dom'

export default class Login extends React.Component{

    render(){
        return(
            <div>
                <h1>hello login page</h1>
                <Link to='/signup'>Need to Create an Account?</Link>
            </div>
        )
    }
}