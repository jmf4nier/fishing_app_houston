import { FETCH_MESSAGES, POST_MESSAGE, PATCH_MESSAGE, POST_USER } from '../actions/types';


export const fetchMessages = (id) => dispatch =>{
    
    const url = new URL('http://localhost:5000/messages/')
    const params = {lake_id: id}    
    // sets the passed in lake_id to params for the request for access in the server.
    url.search = new URLSearchParams(params)
    fetch(url)
    .then(res => res.json())
    .then(result => dispatch({
        type: FETCH_MESSAGES,
        payload: result
    }))
}
export const postMessage = (data) => dispatch =>{
    console.log(data)
    fetch('http://localhost:5000/signup',{
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: '',
            password:  '',
            email: '',
        })
    })
    .then(res => res.json())
    .then(result => dispatch({
        type: POST_USER,
        payload: result
    }))
}
export const patchMessage = (data) => (dispatch) => {
 console.log(data)
fetch('http://localhost:5000/messages/update/'+data.message_id,{
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        reply: data.reply,
    })
})
.then(res => res.json())
.then(result => 
    
    dispatch({
    type: PATCH_MESSAGE,
    payload: result
}))
}