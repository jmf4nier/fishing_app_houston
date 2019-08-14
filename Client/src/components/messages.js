import React from 'react'
import { connect } from 'react-redux'
import {fetchMessages, postMessage} from '../actions/messageActions'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { EventEmitter } from 'events';

class Messages extends React.Component{

    state={
        message: ''
    }

    componentDidMount(){
        this.props.fetchMessages();
    }
    handleChange = (event)=>{
        const content = event.target.value
        this.setState({
            message: content
        })
    }
    handleSubmit = (event)=>{
        
        const messageContent = this.state.message
        const data = {
            lake_id: this.props.lake._id,
            replies: [],
            author: 'shannon',
            content: messageContent,
            date: new Date()
        }
            
         this.props.postMessage(data);
    }

    render(){
        
        const messages = this.props.messages.map((message, index) =>(
        <Comment key={index} style={{textAlign:'left'}}>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Comment.Content>
                <Comment.Author >{message.author}</Comment.Author>
                <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
                </Comment.Metadata>
                <Comment.Text>
                <p>{message.content}</p>
                </Comment.Text>
                <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
            {(message.replies.length > 0) ? message.replies.map((reply, index)=>(
            <Comment.Group key={index}>
                    <Comment style={{textAlign:'left'}}>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                        <Comment.Content>
                            <Comment.Author>{reply.author}</Comment.Author>
                            <Comment.Metadata>
                            <div>Just now</div>
                            </Comment.Metadata>
                            <Comment.Text>{reply.content}</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
        )): null}
        </Comment>
        ))

        
        return(
            
                <Comment.Group  className='comment-group'>
                    <Header as='h1' dividing>
                        Comments
                    </Header>
                    {messages}
                    <Form reply onSubmit={()=>this.handleSubmit()} >
                        <Form.TextArea onChange={event=>this.handleChange(event)} />
                        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                    </Form>
                </Comment.Group>
                
             
        )
    }
}
const mapStateToProps = state => ({
    messages: state.messageReducer.messages,
    lake: state.lakeReducer.currentLake
})
export default connect(mapStateToProps, { fetchMessages, postMessage })(Messages)

 