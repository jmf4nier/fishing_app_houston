import React from 'react';
import {Header, Container, Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
import LakeCard from './lakeCards'
import MapContainer from '../googleMaps/googleMaps'
import { currentLake } from '../actions/lakeActions'


class LakeIndex extends React.Component{

    // componentDidMount(){
    //     this.props.fetchLakes();
    // }

    render(){
        // const token = localStorage.getItem('token')
        
        const header = 
            <Container text>
                <i className="far fa-user" style={{position:'absolute',     right:'3%', top:'.5%', fontSize:'1.5vw'}}>
                    No User Logged in
                </i>
              
                <Header  as='h1' id='main-title'>
                    <i className="fas fa-fish" style={{marginRight:'3%', color:'lightBlue', fontSize:'60px'}}></i>
                    Houston Area fishing
                    <i className="fas fa-fish" style={{ marginLeft:'3%',color:'lightBlue',fontSize:'60px'}}></i>
                </Header>
            </Container>

        const headerWithName = 
            <Container text>
                <i className="fas fa-user" style={{display:'inline', position:'absolute',right:'3%', top:'.5%', fontSize:'2vw'}}><p style={{margin:'1%', display:'inline'}}>{this.props.user.username}</p></i>
                <Header  as='h1' id='main-title'>
                    <i className="fas fa-fish" style={{marginRight:'3%', color:'lightBlue', fontSize:'60px'}}></i>
                    Houston Area fishing
                    <i className="fas fa-fish" style={{ marginLeft:'3%',color:'lightBlue',fontSize:'60px'}}></i>
                </Header>
            </Container>
       
        
        return(
          
                
                <Grid id='lake-index' style={{margin:'1%'}} columns='1'  centered={true} >
                        <Grid.Row   >
                            {(this.props.user === '')? header : headerWithName}
                        </Grid.Row>
                        <Grid.Row style={{height:'500px'}} >
                            <MapContainer lakes={this.props.lakes} />
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
 export default connect(mapStateToProps, { currentLake })(LakeIndex)
