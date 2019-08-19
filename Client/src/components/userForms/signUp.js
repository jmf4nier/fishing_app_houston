import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { postUser} from '../actions/userActions'
import history  from '../../history'

class SignUp extends React.Component{
    state = {
            password: null,
            username: null,
            email: null,
            error: null,
    }
    componentWillReceiveProps(newProps){
       if(newProps.currentUser === 'Account Created'){
          history.push('/login') 
       }else{
           console.log(newProps.currentUser)
           this.setState({
               error: newProps.currentUser
           })
       }
    }

    handleSubmit = () => {
        
        const data = this.state
        this.props.postUser(data)
        this.setState({
            password: null,
            email: null
        })
    }
    handleChange = (e) => {
        const info = e.target.value
        if (e.target.name === 'password'){
            this.setState({
                password: info
            })
        }else if(e.target.name === 'username'){
            this.setState({
                username: info
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
                <h1 style={{marginTop:'3%'}}>Signup Page</h1>
                {(this.state.error)?<div>{this.state.error}</div>: null}
                <Form onSubmit={ (e) => this.handleSubmit(e)}  style={{width:'60%', marginLeft:'20%', marginTop:'15%'}}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid name='username' label='Username' placeholder='Username' onChange={ (event) => this.handleChange(event) }/>
                        <Form.Input fluid name='password' label='Password' placeholder='Password' type='password' onChange={ (event) => this.handleChange(event) } />
                        <Form.Input fluid name='email' label='Email' placeholder='Email@email.com' onChange={ (event) => this.handleChange(event) } />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                    <Link to='/login'>Cancel</Link>
                </Form> 
          </Container>   
           
        )
    }
}
const mapStateToProps = state => ({
    currentUser: state.userReducer.currentUser
})
export default connect(mapStateToProps, { postUser })(SignUp)