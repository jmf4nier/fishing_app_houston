import React from 'react';
import {Link} from 'react-router-dom'
import { Form, Container } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { postUser} from '../actions/userActions'

class Login extends React.Component{

    render(){
        return(
            
                
            
            <Container>
             <h1 style={{marginTop:'3%'}}>Login Page</h1>
 
             <Form  style={{width:'60%', marginLeft:'20%', marginTop:'15%'}}>
                     
                 <Form.Group widths='equal'>
                     <Form.Input fluid label='Registered  Email' placeholder='Email@email.com' />
                     <Form.Input fluid label='Password' placeholder='Password' type='password' />
                 </Form.Group>
                 <Form.Button>Login</Form.Button>
                 <Link to='/login'>Cancel</Link>
           </Form>
           <h4><Link to='/signup'>Need to Create an Account?</Link></h4>
           <h4><Link to='/'>I Don't Want to Sign-in</Link></h4>
             
           </Container>   
        )
    }
}
const mapStateToProps = state => ({
    
})
export default connect(mapStateToProps, {   })(Login)