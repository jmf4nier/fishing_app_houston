import { FETCH_MESSAGES, POST_MESSAGE } from './types';


export const fetchMessages = () => dispatch =>{
    fetch('http://localhost:5000/messages/')
    .then(res => res.json())
    .then(result => dispatch({
        type: FETCH_MESSAGES,
        payload: result
    }))
}
export const postMessage = (data) => dispatch =>{
    console.log(data)
    fetch('http://localhost:5000/messages/add',{
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            lake_id: data.lake_id ,
            replies: data.replies,
            author: data.author,
            content: data.content,
            date: data.date,
        })
    })
    .then(res => res.json())
    .then(result => dispatch({
        type: POST_MESSAGE,
        payload: result
    }))
}
