import React from 'react';
import {Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
//import {fetchLakes} from '../actions/lakeActions'
import LakeCard from './lakeCards'
import MapContainer from './googleMaps'
import MainHeader from './header';


class LakeIndex extends React.Component{

    // componentDidMount(){
    //     this.props.fetchLakes();
    // }

    render(){
        
       
        
        return(
          
                
                <Grid id='lake-index' columns='1' container={true} centered={true} textAlign='center'>
                    
                        <Grid.Row   >
                            <MainHeader/>
                        </Grid.Row>
                        <Grid.Row style={{height:'500px'}} >
                            <MapContainer lakes={this.props.lakes}/>
                        </Grid.Row>
                        <Grid.Row   >
                            <LakeCard/>
                        </Grid.Row>
                    
                </Grid>
           
        )
    }
}

const mapStateToProps = state => ({
    lakes: state.lakeReducer.lakes
})
 export default connect(mapStateToProps, { })(LakeIndex)
