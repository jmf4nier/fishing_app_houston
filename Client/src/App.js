import React from 'react';
import history from './history'
import {Router, Route} from 'react-router-dom'
import './App.css';
import LakeIndex from './components/lakes/lakeIndex'
import Login from './components/userForms/login'
import SignUp from './components/userForms/signUp'
import LakeShow from './components/lakes/lakeShow';
import NavBar from './components/navBar/navBar'
import { connect } from 'react-redux';

 class App extends React.Component{
  
  componentDidMount(){
    
  }
  


  render(){
    
    return (
      <div className="App">
        {(this.props.showLogin) ? <Login/> : null}
        {(this.props.showSignup) ? <SignUp/>: null}
        <Router history={history}>
          <NavBar/>
          <Route exact path='/' component={LakeIndex}/>
          <Route exact path='/lakes/:id' component={LakeShow}/>
          {/* <Route exact path='/login' component={Login}/> */}
          <Route exact path='/signup' component={SignUp}/>
        </Router>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lake: state.lakeReducer.currentLake,
  showLogin: state.userReducer.showLogin,
  showSignup: state.userReducer.showSignup
})
export default connect(mapStateToProps, {  })(App)


