import React from 'react';
import {Header, Container, Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
import LakeCard from './lakeCards'
import MapContainer from '../googleMaps/googleMaps'
import { currentLake } from '../actions/lakeActions'


class LakeIndex extends React.Component{

    componentDidMount(){
        window.scrollTo(0,0)
    }
    handleMarkerChoice = ( lake )=>{        //callback function passed as prop to mapContainer and recieves chosen lake
        console.log(lake)
        this.props.currentLake( lake )
    }

    capitalizeUsername = (name)=> {
        if (name !== undefined){
        return name.charAt(0).toUpperCase() + name.slice(1);
        }else{return null}
    }

    render(){
        // const token = localStorage.getItem('token')
        
        const header = 
            <Container text>
                <i className="far fa-user" style={{color:'white',position:'absolute', right:'3%', top:'.5%', fontSize:'1.5vw'}}>  No User Logged in</i>
              
                <Header  as='h1' >
                    <i className="fas fa-fish" style={{ textShadow: '4px 4px rgba(173, 170, 170, 0.534)', fontSize:'3vw',}}></i>
                    <p id='main-title'>Houston Area Fishing</p>
                    <i className="fas fa-fish" style={{ textShadow: '4px 4px rgba(173, 170, 170, 0.534)', fontSize:'3vw',}}></i>
                </Header>
            </Container>

        const headerWithName = 
            
            <Container text>

                <i className="fas fa-user" style={{display:'inline', position:'absolute',right:'3%', top:'.5%', fontSize:'1.5vw'}}><p style={{margin:'1%', display:'inline'}}>  {this.capitalizeUsername(this.props.user.username)}</p></i>

                <Header  as='h1' style={{textShadow: '4px 4px rgb(173, 169, 169' }}>
                    <i className="fas fa-fish" style={{marginRight:'3%', color:'lightBlue', fontSize:'100%'}}></i>
                    <p>Houston Area Fishing</p>
                    <i className="fas fa-fish" style={{ marginLeft:'3%',color:'lightBlue',fontSize:'100%'}}></i>
                </Header>
            </Container>
       
        
        return(
          
                
                <Grid id='lake-index' style={{margin:'1%'}} columns='1'  centered={true} >
                        <Grid.Row   >
                            {(this.props.user === '')? header : headerWithName}
                        </Grid.Row>
                        <Grid.Row style={{height:'500px'}} >
                            <MapContainer lakes={this.props.lakes} handleMarkerChoice={this.handleMarkerChoice}/>  
                        </Grid.Row>
                        <Grid.Row style={{ marginTop:'2%'}}  >
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
