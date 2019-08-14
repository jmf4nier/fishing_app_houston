import React from 'react';
import history from './history'
import {Router, Route} from 'react-router-dom'
import './App.css';
import LakeIndex from './components/lakeIndex'
import LakeShow from './components/lakeShow';
import NavBar from './components/navBar'
import { connect } from 'react-redux';

 class App extends React.Component{
  
  componentDidMount(){
    
  }
  


  render(){
    
    return (
      <div className="App">
        
        <Router history={history}>
          <NavBar/>
          <Route exact path='/' component={LakeIndex}/>
          <Route path='/lakes/:id' component={LakeShow}/>

        </Router>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lake: state.lakeReducer.currentLake
})
export default connect(mapStateToProps, {  })(App)


