import React from 'react'
import { connect } from 'react-redux'
import {fetchMessages, postMessage, patchMessage} from '../actions/messageActions'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Messages extends React.Component{

    state={
        reply: {},
        message: '',
        isReply: false,
        idChosen: null,
        keyChosen: null,
        // imageFile: null
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
        }else if (event.target.name === 'image'){
            console.log(content)
            this.setState({
                imageFile: content
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
    // handlePicSubmit = (e) => {
    //     this.setState({
    //         isReply: !this.state.isReply
    //     })
    //     const data = {
    //         imagePath: this.state.imageFile
    //         }
    //     this.props.postImage(data)
    // }

    handleCommentSubmit = (event) =>{
        const author = this.props.currentUser.username
        const messageContent = this.state.message
        const data = {
            lake_id: this.props.lake._id,
            replies: [],
            author: author,
            content: messageContent,
            date: new Date()
        }
         this.props.postMessage(data);
    }

    render () {
        console.log(this.props.currentUser)

        const token = window.localStorage.getItem('token')

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

                    {(token !== null)?<Comment.Action style={{color:'blue', opacity:'.5'}} onClick = { () => this.handleReplies(index,message._id) }>Reply</Comment.Action>:null}

                    {(this.state.keyChosen === index && this.state.isReply) ? <div>{replyField } </div>: null}

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
                    {(token !== null ) ? commentField : <Link to='/login'>Login To Post Messages</Link>}
                </Comment.Group>
                
             
        )
    }
}
const mapStateToProps = state => ({
    messages: state.messageReducer.messages,
    lake: state.lakeReducer.currentLake,
    currentUser: state.userReducer.currentUser
})
export default connect(mapStateToProps, { fetchMessages, postMessage, patchMessage,  })(Messages)

 