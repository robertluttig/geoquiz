import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
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
    markerLocation: {},
  };

  componentDidMount() {
    Geocode.setApiKey(GOOGLE_MAP_API);
    Geocode.setLanguage("en");
    Geocode.fromAddress(this.props.continent).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({ latitude: lat, longitude: lng });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAnswer() {
    let answer = {};
    Geocode.setApiKey(GOOGLE_MAP_API);
    Geocode.setLanguage("en");
    Geocode.fromLatLng(
      this.state.markerLocation.lat,
      this.state.markerLocation.lng
    ).then(
      (response) => {
       
        const country = response.results[response.results.length-1].formatted_address;
        
        if (
          country.toLowerCase().trim() ===
          this.props.country.toLowerCase().trim()
        ) {
          answer[this.props.country.trim()] = "Correct";
          this.props.saveResult(answer);
        } else {
          answer[this.props.country.trim()] = "Incorrect";
          this.props.saveResult(answer);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  displayMarker = (mapProps, map, clickEvent) => {
    this.setState({
      ...this.state,
      latitude: clickEvent.latLng.lat(),
      longitude: clickEvent.latLng.lng(),
      markerLocation: {
        lat: clickEvent.latLng.lat(),
        lng: clickEvent.latLng.lng(),
        label: this.props.country.trim(),
      },
    });
    this.getAnswer();
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
        <Marker
          label={`You chose ${this.state.markerLocation.label} here`}
          position={{
            lat: this.state.markerLocation.lat,
            lng: this.state.markerLocation.lng,
          }}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API,
})(MapContainer);
