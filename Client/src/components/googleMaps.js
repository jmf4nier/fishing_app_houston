import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';
// import { connect } from 'react-redux';

class MapContainer extends React.Component {
    
  
    displayMarkers = () => {
      return this.props.lakes.map((lake, index) => {
        return <Marker key={index} id={index} position={{
         lat: lake.coordinates.latitude,
         lng: lake.coordinates.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
      return (
          <div style={{ marginRight:'85em', marginLeft:'0em'}}>
            <Map
                google={this.props.google}
                zoom={10}
                style={mapStyles}
                initialCenter={{ lat: 29.7604, lng: -95.3698}}>
                {this.displayMarkers()}
            </Map>
          </div>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBDIzsWrPiktdWsGZ4f0EM4FLMHVslvki0'
  })(MapContainer)


 

  const mapStyles = {
   
    width: '80%', 
    height: '90%', 
    
  };