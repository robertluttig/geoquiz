import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";

const mapStyles = {
    width: '32vw',
    height: '400px'
};
const GOOGLE_MAP_API = "AIzaSyBcjTAI9kaG51E3Yuqh5HnTCz_k042szLk";

export class MapContainer extends Component {
    // const[location, setLocation] = useState({ });
    state = {
        longitude:0,
        latitude:0
    }
    componentDidMount(){
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
    render() {
        
        return (
            <Map
                google={this.props.google}
                zoom={3}
                style={mapStyles}
                initialCenter={{
                    lat: this.state.latitude,
                    lng: this.state.longitude
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAP_API
})(MapContainer);