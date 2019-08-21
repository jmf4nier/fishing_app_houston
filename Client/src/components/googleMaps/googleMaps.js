import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import React from 'react';
import history from '../../history';
import ReactDOM from 'react-dom'



class MapContainer extends React.Component {

  state = {
    showingInfoWindow: false,
    selectedCoordinates: {},
    selectedLake: {}
  }

    
  handlePushtoShowPage = () =>{
     this.props.handleMarkerChoice(this.state.selectedLake)   //callback from lakeIndex that accepts the chosen lake and operates redux currentLake method
      history.push(`/lakes/${this.state.selectedLake._id}`)
  }

  onMarkerClick = (lake)=>{
    const lakeCoordinates = lake.coordinates
    this.setState({
      selectedCoordinates: lakeCoordinates,
      selectedLake: lake,
      showingInfoWindow: !this.state.showingInfoWindow
    })
  }

    
  displayMarkers = () => {
      return this.props.lakes.map((lake, index) => {
        return <Marker onClick={(e) => this.onMarkerClick( lake , e )} key={index} id={index} text='lake marker' position={{
         lat: lake.coordinates.lat,
         lng: lake.coordinates.lng
       }}
        />
      })
    }
  onInfoWindowOpen() {
    
    const link = 
    <a onClick={() => this.handlePushtoShowPage()}> 
    {this.state.selectedLake.name}
    </a>
    ReactDOM.render(
      React.Children.only(link),
      document.getElementById("name-link")
      )
  }
  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        selectedPlace: {}
      })
    }
}


  
    render() {
      console.log(this.props)
      return (
          
            <Map
                google={this.props.google}
                zoom={10}
                style={{width: '70%', 
                height: '90%', 
                marginRight: '0%',
                marginLeft: '-35%',
                borderStyle:'ridge',
                borderWidth:"8px",
                borderColor:'lightBlue'}}
                initialCenter={{ lat: 29.7604, lng: -95.3698}}>
                {this.displayMarkers()}
                <InfoWindow 
                    position={this.state.selectedCoordinates}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                    onOpen={e => {
                    this.onInfoWindowOpen();
                    }}
                > 
                  <h4 id='name-link' >
                    
                  </h4>
                  <p>
                    {this.state.selectedLake.description}
                  </p>
                </InfoWindow>

            </Map>
          
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBDIzsWrPiktdWsGZ4f0EM4FLMHVslvki0'
  })(MapContainer)

  


 

  