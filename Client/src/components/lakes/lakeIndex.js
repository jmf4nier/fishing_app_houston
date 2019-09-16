import React from 'react';
import {Header, Container, Grid, Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import LakeCard from './lakeCards';
import LakeShow from './lakeShow'
import MapContainer from '../googleMaps/googleMaps'
import { currentLake } from '../actions/lakeActions'
import NavBar from '../navBar/navBar'

class LakeIndex extends React.Component{

    state = {
        mapview: false,
        showView: false
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }
    handleMapView = () => {
        this.setState({
            mapview: !this.state.mapview
        })
    }
    handleShowView = (lake) => {
        this.props.currentLake(lake)
        this.setState({
            showView: true
        })
    }
    handleShowAll = () => {
        this.setState({
            showView: false
        })
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
                <i className="far fa-user" style={{color:'white',position:'absolute', right:'3%', top:'.5%', fontSize:'1.5vw'}}>  
                    <p>
                        Not Logged in
                    </p>
                </i>
                <Header  as='h1' style={{marginTop:'1%'}} >
                    <p className='main-title'>Houston Area Freshwater Fishing</p>
                </Header>
            </Container>

        const headerWithName = 
            <Container text>
                <i className="fas fa-user" style={{display:'inline', position:'absolute',right:'3%', top:'.5%', fontSize:'1.5vw', color:'white'}}>
                    <p >
                        {this.capitalizeUsername(this.props.user.username)}
                    </p>
                </i>
                <Header  as='h1' style={{textShadow: '4px 4px rgb(173, 169, 169', marginTop:'1%' }}>
                    <p className='main-title'>Houston Area Freshwater Fishing</p>
                </Header>
            </Container>

        const lakeGrid = 
            <Grid id='lake-index' style={{margin:'1%'}} columns='1'  centered={true} >
                <Grid.Row>
                    {(this.props.user === '')? header : headerWithName}
                </Grid.Row>
                <Grid.Row> 
                    <Button color='blue' size='large' onClick={()=>this.handleMapView()}>Toggle Map View</Button>
                </Grid.Row>
                    {(this.state.mapview)?<Grid.Row style={{height:'500px'}} >
                    <MapContainer lakes={this.props.lakes} handleMarkerChoice={this.handleShowView}/>  
                </Grid.Row>:
                <Grid.Row style={{marginLeft:'4.5%', marginTop:'2%'}}  >
                    <LakeCard handleClick={this.handleShowView}/>
                </Grid.Row>}
                </Grid>
        return(
            <div>
                <NavBar handleClick={this.handleShowAll}/>
                {(this.state.showView)? <LakeShow handleClick={this.handleShowAll}/>: lakeGrid }
            </div>
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
