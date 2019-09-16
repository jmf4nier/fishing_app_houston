import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
import Messages from '../messages/messages'
import { Grid, Table, Button } from 'semantic-ui-react'
import PictureGallery from './pictureGallery'

class LakeShow extends React.Component{

   componentDidMount(){
        window.scrollTo(0,0)
        
    }

    render(){
        
        
       
        const {name,locality, description, species, water_quality, size_in_acres, public_access, license_required, operating_organization } = this.props.lake
        
        return(
            
            <Grid columns='1'  centered={true} container={true} style={{marginLeft:'5%', marginRight:'1%'}} >
                <Button onClick ={()=>this.props.handleClick()} style={{marginLeft:'3%', marginTop:'3%'}}>Return to main menu</Button>
                <Grid.Row>
                    <h1 id='showpage-title'>{name}</h1>
                    
               </Grid.Row>
                <Grid.Row id='gallery-div' ><PictureGallery lakePics={this.props.lake.images}/></Grid.Row>
                <Grid.Row style={{fontFamily:'Times New Roman',borderStyle:'ridge', padding:'2%', textAlign:'left', marginTop:'3%', marginBottom:'3%', fontSize:'1.25vw', borderWidth:'5px', borderRadius:'2%',backgroundColor:'rgb(248, 246, 246', opacity:'.9'}}>{description}</Grid.Row>
                <Grid.Row>
                    <Table celled style={{fontFamily:'Times New Roman',borderStyle:'ridge', fontSize:'1.25vw', borderWidth:'5px', borderRadius:'2%',backgroundColor:'rgb(248, 246, 246', opacity:'.9'}}>
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

