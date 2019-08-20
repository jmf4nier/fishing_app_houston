import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { loginUser, showSignup, showLogin } from '../actions/userActions'
import history from '../../history';

class Login extends React.Component{

    state = {
        password: null,
        email: null,
        loggedIn: null,
        error: '',
        showSignup: false,
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

handleShowSignupClick = async () => {

    await this.setState({
        showSignup: !this.state.showSignup
    })
    await this.props.showLogin(false)
    this.props.showSignup(this.state.showSignup)
}
handleCancelClick = () => {
    this.props.showLogin(false)
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
       console.log(this.state.showSignup)

        return(
            
                
            
            <Container style={{backgroundColor: 'lightBlue', width:'60%', height:'40%'}}>
             <h1 style={{marginTop:'3%'}}>Login Page</h1>
             {(this.state.error)? window.alert(this.state.error): null}
             <Form onSubmit={ (e) => this.handleSubmit(e)} style={{width:'60%', marginLeft:'20%', marginTop:'15%'}}>
                     
                 <Form.Group widths='equal'>
                     <Form.Input fluid name='email' label='Registered  Email' placeholder='Email@email.com' onChange={ (e) => this.handleChange(e)} />
                     <Form.Input fluid name='password' label='Password' placeholder='Password' type='password' onChange={ (e) => this.handleChange(e)} />
                 </Form.Group>
                 <Form.Button size='medium' >Login</Form.Button>
                 
           </Form>
           <Button onClick={ () => this.handleCancelClick() } color='red' tabIndex={1}  size='medium' style={{ margin:'1%' }}>Cancel</Button>
           <h4 style={{margin:'1%'}} onClick={() => this.handleShowSignupClick()}><a href="#">Need to Create an Account?</a></h4>
           
           
             
           </Container>   
        )
    }
}
const mapStateToProps = state => ({
    currentUser: state.userReducer.currentUser,
    showLogin: state.userReducer.showLogin
})
export default connect(mapStateToProps, { loginUser, showSignup, showLogin })(Login)