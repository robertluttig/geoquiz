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
    correctCount: 0,
    incorrectCount: 0,
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

  getAnswer(state) {
    let answer = {};
    Geocode.setApiKey(GOOGLE_MAP_API);
    Geocode.setLanguage("en");
    Geocode.fromLatLng(
      this.state.markerLocation.lat,
      this.state.markerLocation.lng
    ).then(
      (response) => {
        const address = response.results[0].formatted_address;
        let addrArr = address.split(",");
        let country = addrArr[addrArr.length - 1];
        console.log(country);
        if (
          country.toLowerCase().trim() ===
          this.props.country.toLowerCase().trim()
        ) {
          answer[this.props.country.trim()] = "Correct";
          // this.setState({ correctCount: this.state.correctCount + 1 });
          // console.log("correct", this.state.correctCount);
          this.props.saveResult(answer);
        } else {
          answer[this.props.country.trim()] = "Incorrect";
          // this.setState({ incorrectCount: this.state.incorrectCount + 1 });
          // console.log("incorrect", this.state.incorrectCount);
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
      markerLocation: {
        lat: clickEvent.latLng.lat(),
        lng: clickEvent.latLng.lng(),
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
