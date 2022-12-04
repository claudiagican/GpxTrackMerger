import 'leaflet/dist/leaflet.css'
import React, { Component } from 'react'
import { MapContainer, Polyline, TileLayer } from 'react-leaflet'

class MyMapContainer extends Component {
    render (){

        return(
            <MapContainer
                center={[0, 0]}
                zoom={3}
                scrollWheelZoom={false}
                className='harta'
                
                >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        )
    };
}

export default MyMapContainer; 