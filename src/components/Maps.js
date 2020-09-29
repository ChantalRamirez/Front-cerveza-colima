import React, { Component } from 'react';
import credencials from '../credentials';
import GoogleMaps from 'simple-react-google-maps';

class Maps extends Component {
    render(){
        return (
            <div className='Container'>
                <GoogleMaps
                    apiKey={credencials.apikey}
                    style={{ height: "400px", width: "300px"}}
                    zoom={12}
                    center={{
                        lat: 40.4127355,
                        lng: -3.695428
                    }}
                    markers={{ lat: 40.409711, lng: -3.692569}}
                />
            </div>
        );
    }
}

export default Maps;