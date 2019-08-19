import React from 'react';
import  { Button, Form } from 'semantic-ui-react'

export default class ReplyBox extends React.Component{
    render(){
        return(
            <Form reply onSubmit={()=>this.handleSubmit()} >
                <Form.TextArea onChange={event=>this.handleChange(event)} />
                <Button content='Post Comment' labelPosition='left' icon='edit' primary />
            </Form>
        )
    }
};
