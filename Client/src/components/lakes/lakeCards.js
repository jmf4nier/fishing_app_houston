import React from 'react';
import { connect } from 'react-redux';
import {fetchLakes, currentLake} from '../actions/lakeActions';
import history from '../../history';
import { Grid, Card, Container } from 'semantic-ui-react'


class LakeCard extends React.Component{

    componentDidMount(){
        this.props.fetchLakes();
    }
    handleClick = (lake) =>{
        
        this.props.currentLake(lake)
        history.push(`/lakes/${lake._id}`)
    }

    render(){
        const lakes = this.props.lakes.map(lake =>(
            
                <Grid.Column key={lake._id}>
                    <Card style={{margin:'.5em'}} centered onClick={ () => this.handleClick(lake) } key={`${lake._id} + 1`}>
                        <img src={lake.images[0]}  height='200px' width='auto' alt='lake' />
                        <Card.Content>
                            <Card.Header>{lake.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                {lake.species.join(', ')}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            
        ))
        
        return(
            <Container >
                <Grid style={{marginLeft:'4%'}} columns={4} divided>
                    <Grid.Row>
                        <Card.Group>
                            {lakes}
                       </Card.Group>
                    </Grid.Row>
                </Grid>
            </Container>
          
        ) 
    }
}

const mapStateToProps = state => ({
    lakes: state.lakeReducer.lakes
})
export default connect(mapStateToProps, { fetchLakes, currentLake })(LakeCard)

 