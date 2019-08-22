import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
import Messages from '../messages/messages'
import { Grid, Table } from 'semantic-ui-react'
import PictureGallery from './pictureGallery'

class LakeShow extends React.Component{

   componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){
        
        
        
        const {name,locality, description, species, water_quality, size_in_acres, public_access, license_required, operating_organization } = this.props.lake
        console.log(license_required)
        return(
            <Grid columns='1' container={true} centered={true} >
                <Grid.Row>
                    <h1 id='showpage-title'>{name}</h1>
               </Grid.Row>
                <Grid.Row id='gallery-div' ><PictureGallery lakePics={this.props.lake.images}/></Grid.Row>
                <Grid.Row style={{fontFamily:'Times New Roman',borderStyle:'ridge', padding:'1%', textAlign:'left', marginTop:'3%', marginBottom:'3%', fontSize:'1.25vw', borderWidth:'5px', borderRadius:'2%',backgroundColor:'rgb(248, 246, 246', opacity:'.8'}}>{description}</Grid.Row>
                <Grid.Row>
                    <Table celled style={{fontFamily:'Times New Roman',borderStyle:'ridge', fontSize:'1.25vw', borderWidth:'5px', borderRadius:'2%',backgroundColor:'rgb(248, 246, 246', opacity:'.8'}}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell style={{padding:'3%'}}>Species</Table.HeaderCell>
                            <Table.HeaderCell>Acres</Table.HeaderCell>
                            <Table.HeaderCell>License</Table.HeaderCell>
                            <Table.HeaderCell>Water Quality</Table.HeaderCell>
                            <Table.HeaderCell>Operating Organization</Table.HeaderCell>
                            <Table.HeaderCell>Public Access</Table.HeaderCell>
                            <Table.HeaderCell>Area</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell style={{padding:'3%'}}>{species.join(', ')}</Table.Cell>
                            <Table.Cell>{size_in_acres}</Table.Cell>
                            <Table.Cell>{(license_required === true)?'Yes':'No'}</Table.Cell>
                            <Table.Cell>{water_quality}</Table.Cell>
                            <Table.Cell>{operating_organization}</Table.Cell>
                            <Table.Cell>{public_access}</Table.Cell>
                            <Table.Cell>{locality}</Table.Cell>

                        </Table.Row>
                    
                        </Table.Body>
                    </Table>
                </Grid.Row>   
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


{/* <Grid.Row > <h2 className='lake-show-content'><strong>Coordinates:</strong> <p>lat: {lat} long: {long}</p> </h2></Grid.Row>    
                <Grid.Row > <h2 className='lake-show-content'><strong>Species:</strong> <p>{species.join(', ')}</p></h2> </Grid.Row>   
                <Grid.Row > <h2 className='lake-show-content'><strong>acres:</strong> <p></p>{size_in_acres}</h2> </Grid.Row>
                <Grid.Row > <h2 className='lake-show-content'><strong>public Access:</strong><p>{public_access}</p> </h2> </Grid.Row>
                <Grid.Row > <h2 className='lake-show-content'><strong>license required:</strong> <p>{license_required}</p></h2> </Grid.Row>    
                <Grid.Row > <h2 className='lake-show-content'><strong>water quality:</strong> <p>{water_quality}</p></h2> </Grid.Row>
                <Grid.Row > <h2 className='lake-show-content'><strong>operating organization:</strong><p>{operating_organization}</p> </h2> </Grid.Row>  */}