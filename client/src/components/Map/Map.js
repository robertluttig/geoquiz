import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";
const mapStyles = {
  width: "32vw",
  height: "400px",
  featureType: "all",
  elementType: "labels",
  stylers: [{ visibility: "off" }],
};

var customStyled = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
]; //(array shown above)

const GOOGLE_MAP_API = "AIzaSyBcjTAI9kaG51E3Yuqh5HnTCz_k042szLk";
export class MapContainer extends Component {
    
    state = {
        longitude: 0,
        latitude: 0,
        markerLocation:{}
    }

    componentDidMount() {
        Geocode.setApiKey(GOOGLE_MAP_API);
        Geocode.setLanguage("en");
        Geocode.fromAddress(this.props.continent).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({ latitude: lat, longitude: lng })
            
            },
            error => {
                console.error(error);
            }
        );
    }

    getAnswer() {
      Geocode.setApiKey(GOOGLE_MAP_API);
      Geocode.setLanguage("en");
      Geocode.fromLatLng(this.state.markerLocation.lat, this.state.markerLocation.lng).then(
        response => {
          const address = response.results[0].formatted_address;
          let addrArr = address.split(",")
          let country = addrArr[addrArr.length-1]
          console.log(country);
        },
        error => {
          console.error(error);
        }
      );
  }

    displayMarker = (mapProps, map, clickEvent) =>  {
     this.setState({...this.state, markerLocation: {lat:clickEvent.latLng.lat(), lng:clickEvent.latLng.lng()}})
     this.getAnswer()
    };
    render() {
        return (
            <Map
            google={this.props.google}
            zoom={3}
            style={mapStyles}
            styles={customStyled}
            featureType="all"
            center={{
              lat: this.state.latitude,
              lng: this.state.longitude,
            }}
                onClick={this.displayMarker}
            >
                <Marker position={{ lat: this.state.markerLocation.lat, lng: this.state.markerLocation.lng }} />
            </Map>
        );
    }
}
export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API,
})(MapContainer);
