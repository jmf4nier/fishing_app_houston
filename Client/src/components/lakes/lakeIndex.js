import React from 'react';
import {Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
//import {fetchLakes} from '../actions/lakeActions'
import LakeCard from './lakeCards'
import MapContainer from '../googleMaps/googleMaps'
import MainHeader from '../header';
import Login from '../userForms/login'
import SignUp from '../userForms/signUp'


class LakeIndex extends React.Component{

    // componentDidMount(){
    //     this.props.fetchLakes();
    // }

    render(){
        
       
        
        return(
          
                
                <Grid id='lake-index' style={{margin:'1%'}} columns='1'  centered={true} >
                    {(this.props.showLogin) ? <Login/> : null}
                    {(this.props.showSignup) ? <SignUp/>: null}
                   
                        <Grid.Row   >
                            {(this.props.user.username === '')?<MainHeader/>:<div>{this.props.user.username}<MainHeader/></div>}
                        </Grid.Row>
                        <Grid.Row style={{height:'500px'}} >
                            <MapContainer lakes={this.props.lakes}/>
                        </Grid.Row>
                        <Grid.Row style={{marginLeft:'10%'}}  >
                            <LakeCard/>
                        </Grid.Row>
                    
               
                </Grid>
           
        )
    }
}

const mapStateToProps = state => ({
    lakes: state.lakeReducer.lakes,
    user: state.userReducer.currentUser,
    showLogin: state.userReducer.showLogin,
    showSignup: state.userReducer.showSignup
})
 export default connect(mapStateToProps, { })(LakeIndex)
