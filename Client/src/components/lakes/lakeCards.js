import React from "react";
import { connect } from "react-redux";
import { currentLake } from "../actions/lakeActions";
import { Grid, Card } from "semantic-ui-react";

class LakeCard extends React.Component {
  state = {
    showLake: false
  };
  componentDidMount() {}
  // handleClick = (lake) =>{
  //     this.props.currentLake(lake)
  //     this.props.handleShowView()
  // }

  render() {
    const lakes = this.props.lakes.map(lake => (
      <Card
        style={{ margin: "1em" }}
        onClick={() => this.props.handleClick(lake)}
        key={lake._id}
      >
        <img src={lake.images[0]} height="200px" width="auto" alt="lake" />
        <Card.Content>
          <Card.Header>{lake.name}</Card.Header>
          <Card.Meta>
            <span className="city">{lake.locality}</span>
          </Card.Meta>
          <Card.Description>{lake.species.join(", ")}</Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>
    ));

    return (
      <Grid style={{ marginLeft: "1%", marginRight: "1%" }}>
        <Grid.Row>
          {lakes.map((lake, i) => (
            <div key={i} style={{ flex: "25" }}> {lake}</div>
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  lakes: state.lakeReducer.lakes
});
export default connect(
  mapStateToProps,
  { currentLake }
)(LakeCard);
