import { POST_USER, LOGIN_USER, SHOW_LOGIN, SHOW_SIGNUP } from './types';

export const postUser = (data) => dispatch =>{
    console.log(data)
    fetch('http://localhost:5000/users/signup',{
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: data.password,
            username:  data.username,
            email: data.email
        })
    })
    .then(res => res.json())
    .then(result => dispatch({
        type: POST_USER,
        payload: result
    }))
}
export const loginUser = (data) => dispatch =>{
    console.log(data)
    fetch('http://localhost:5000/users/login',{
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: data.password,
            email: data.email
        })
    })
    .then(res => res.json())
    .then(result => 
        
        dispatch({
        type: LOGIN_USER,
        payload: result
    }))
}
export const showLogin = (state) => dispatch =>{
    console.log(state)
    dispatch({
        type: SHOW_LOGIN,
        payload: state
    })
}
export const showSignup = (state) => dispatch =>{
    console.log(state)
    dispatch({
        type: SHOW_SIGNUP,
        payload: state
    })
}