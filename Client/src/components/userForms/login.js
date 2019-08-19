import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Container } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'
import history from '../../history';

class Login extends React.Component{

    state = {
        password: null,
        email: null,
        loggedIn: null,
        error: '',
}

componentWillReceiveProps(newProps){
    if(newProps.currentUser.username !== ''){
        
        window.localStorage.setItem('token', newProps.currentUser.token)
        history.push('/') 
    }else{
        
        this.setState({
            error: newProps.currentUser.error
        })
    }
 }

handleSubmit = () => {
    
    const data = this.state
    this.props.loginUser(data)
    this.setState({
        password: null,
        email: null
    })
    if(this.props.currentUser === 'Login failed! Check authentication credentials'){
        console.log(this.props.currentUser)
        
    }
}
handleChange = (e) => {
    const info = e.target.value
    if (e.target.name === 'password'){
        this.setState({
            password: info
        })
    }else if(e.target.name === 'email'){
        this.setState({
            email: info
        })
    }
}

    render(){
       

        return(
            
                
            
            <Container>
             <h1 style={{marginTop:'3%'}}>Login Page</h1>
             {(this.state.error)? window.alert(this.state.error): null}
             <Form onSubmit={ (e) => this.handleSubmit(e)} style={{width:'60%', marginLeft:'20%', marginTop:'15%'}}>
                     
                 <Form.Group widths='equal'>
                     <Form.Input fluid name='email' label='Registered  Email' placeholder='Email@email.com' onChange={ (e) => this.handleChange(e)} />
                     <Form.Input fluid name='password' label='Password' placeholder='Password' type='password' onChange={ (e) => this.handleChange(e)} />
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
    currentUser: state.userReducer.currentUser
})
export default connect(mapStateToProps, { loginUser })(Login)