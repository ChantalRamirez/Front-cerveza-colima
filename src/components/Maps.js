import React, { Component } from 'react';
import GoogleMaps from 'simple-react-google-maps';

class Maps extends Component {
    render(){
        return (
            <div className='Container'>
                <GoogleMaps
                    apiKey={"AIzaSyB5D4CVFK2uo-2Xh4P1a_6IHhpQl_49pQE"}
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