import React from 'react'
import { connect } from 'react-redux'
import {fetchMessages, postMessage, patchMessage} from '../actions/messageActions'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { EventEmitter } from 'events';
import ReplyBox from './replyBox'


class Messages extends React.Component{

    state={
        reply: {},
        message: '',
        isReply: false,
        idChosen: null,
        keyChosen: null
    }

    componentDidMount(){
        this.props.fetchMessages(this.props.lake._id);
        //passing the current lake's id to the fetch to get only related messages
    };

    handleChange = (event) =>{
        const content = event.target.value
        if (event.target.name === 'comment'){
            
            this.setState({
                message: content
            })
        }else if (event.target.name === 'reply'){
            this.setState({
                reply: content
            })
        }
    };

    handleReplies = (indexOfReply, idOfMessage) => {
        
        this.setState({
            isReply: !this.state.isReply,
            keyChosen: indexOfReply,
            idChosen: idOfMessage,
        })
    };

    handleReplySubmit = () => {
        this.setState({
            isReply: !this.state.isReply
        })
        const data = {
            message_id: this.state.idChosen,
            reply:{
                author: 'me',
                content: this.state.reply,
                date: new Date()
            }
        }
        this.props.patchMessage(data)
    };

    handleCommentSubmit = (event) =>{
        
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

    render () {
        const commentField = 
            <Form reply onSubmit={()=>this.handleCommentSubmit()} >
                <Form.TextArea name='comment' style = {{ height:'50px' }} onChange = { event => this.handleChange(event) } />
                <Button content='Post Comment' labelPosition='left' icon='edit' primary />
            </Form>

        const replyField = 
            <Form reply onSubmit={()=>this.handleReplySubmit()} >
                <Form.TextArea name ='reply' style = {{ height:'50px' }} onChange= { event => this.handleChange(event)} />
                <Button content ='Reply' labelPosition ='left' icon ='edit' primary />
            </Form>

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
                <Comment.Actions >
                    <Comment.Action style={{color:'blue', opacity:'.5'}} onClick = { () => this.handleReplies(index,message._id) }>Reply</Comment.Action>
                    {(this.state.keyChosen === index && this.state.isReply) ? replyField : null}
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
                        </Comment.Content>
                    </Comment>
                </Comment.Group> )) : null}
        </Comment>
        ))

        
        return(
            
                <Comment.Group  className='comment-group'>
                    <Header as='h1' dividing>
                        {this.props.lake.name}'s Comments
                    </Header>
                    {messages}
                    {commentField}
                </Comment.Group>
                
             
        )
    }
}
const mapStateToProps = state => ({
    messages: state.messageReducer.messages,
    lake: state.lakeReducer.currentLake
})
export default connect(mapStateToProps, { fetchMessages, postMessage, patchMessage })(Messages)

 