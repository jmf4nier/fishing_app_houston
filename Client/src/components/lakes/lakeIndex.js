import React from 'react';
import {Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
//import {fetchLakes} from '../actions/lakeActions'
import LakeCard from './lakeCards'
import MapContainer from '../googleMaps/googleMaps'
import MainHeader from '../header';


class LakeIndex extends React.Component{

    // componentDidMount(){
    //     this.props.fetchLakes();
    // }

    render(){
        
       
        
        return(
          
                
                <Grid id='lake-index' style={{margin:'1%'}} columns='1'  centered={true} >
                    
                        <Grid.Row   >
                            <MainHeader/>
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
    lakes: state.lakeReducer.lakes
})
 export default connect(mapStateToProps, { })(LakeIndex)
