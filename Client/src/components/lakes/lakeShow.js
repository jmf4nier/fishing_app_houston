import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
import Messages from '../messages/messages'
import { Grid } from 'semantic-ui-react'
import PictureGallery from './pictureGallery'

class LakeShow extends React.Component{

   

componentDidMount(){
   
}
    render(){
        
        const lake = this.props.lake
        const lat = lake.coordinates.latitude
        const long = lake.coordinates.longitude
        const {name, species, water_quality, size_in_acres, public_access, license_required, operating_organization } = this.props.lake
        
        return(
            <Grid columns='1' container={true} centered={true} >
                <Grid.Row>
                    <h1 style={{marginBottom: '.5em', marginTop: '.5em', fontSize:'8vw'}}>{name}</h1>
               </Grid.Row>
                <Grid.Row style={{backgroundColor:'darkGrey',borderRadius:'10%'}}><PictureGallery lakePics={this.props.lake.images}/></Grid.Row>
                {/* <Grid.Row className='lake-show-content'> <Image src={images[0]} alt='image for lake'/> </Grid.Row> */}
                <Grid.Row className='lake-show-content'> <h4><strong>Coordinates:</strong> <p>lat: {lat} long: {long}</p> </h4></Grid.Row>    
                <Grid.Row className='lake-show-content'> <h4><strong>Species:</strong> <p>{species.join(', ')}</p></h4> </Grid.Row>   
                <Grid.Row className='lake-show-content'> <h4><strong>acres:</strong> <p></p>{size_in_acres}</h4> </Grid.Row>
                <Grid.Row className='lake-show-content'> <h4><strong>public Access:</strong><p>{public_access}</p> </h4> </Grid.Row>
                <Grid.Row className='lake-show-content'> <h4><strong>license required:</strong> <p>{license_required}</p></h4> </Grid.Row>    
                <Grid.Row className='lake-show-content'> <h4><strong>water quality:</strong> <p>{water_quality}</p></h4> </Grid.Row>
                <Grid.Row className='lake-show-content'> <h4><strong>operating organization:</strong><p>{operating_organization}</p> </h4> </Grid.Row>    
                <Grid.Row>
                    <Messages/>
                </Grid.Row>
            </Grid>
        )
    }
}
const mapStateToProps = state => ({
    lake: state.lakeReducer.currentLake
})
export default connect(mapStateToProps, {  })(LakeShow)