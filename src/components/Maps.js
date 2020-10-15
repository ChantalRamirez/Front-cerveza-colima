import React, { Component } from 'react';
import GoogleMaps from 'simple-react-google-maps';
import './styles/Product.css';

class Maps extends Component {
    render(){
        return (
            <GoogleMaps
                apiKey={process.env.REACT_APP_APIKEY}
                style={{ height: "300px", width: "auto"}}
                zoom={12}
                center={{
                lat: 40.4127355,
                lng: -3.695428
                }}
                markers={{ lat: 40.409711, lng: -3.692569}}
            />
        );
    }
}

export default Maps;