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
    // const[location, setLocation] = useState({ });
    state = {
        longitude: 0,
        latitude: 0
    }
    markerState = {
        longitude: 0,
        latitude: 0
    }
    componentDidMount() {
        Geocode.setApiKey(GOOGLE_MAP_API);
        Geocode.setLanguage("en");
        Geocode.fromAddress(this.props.continent).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({ latitude: lat, longitude: lng })
                console.log(lat, lng);
            },
            error => {
                console.error(error);
            }
        );
    }
    displayMarker = (mapProps, map, clickEvent) =>  {
        console.log(clickEvent.latLng.lat())
        console.log(clickEvent.latLng.lng())
        this.markerState.latitude = clickEvent.latLng.lat()
        this.markerState.longitude = clickEvent.latLng.lng()
        console.log(clickEvent)
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
                <Marker position={{ lat: this.markerState.latitude, lng: this.markerState.longitude }} />
            </Map>
        );
    }
}
export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API,
})(MapContainer);
