import React from 'react'
import {Header, Container} from 'semantic-ui-react'

export default class MainHeader extends React.Component{
    
    
    render(){
        return(
            <Container text>
                <Header  as='h1' id='main-title'>
                    Welcome to my App
                </Header>
            </Container>
        )
    }
}