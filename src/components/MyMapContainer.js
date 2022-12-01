import 'leaflet/dist/leaflet.css'
import React, { Component } from 'react'
import { MapContainer, Polyline, TileLayer } from 'react-leaflet'

class MyMapContainer extends Component {
    render (){

        return(
            <MapContainer
                center={[40.7317535212683, -73.99685430908403]}
                zoom={9}
                scrollWheelZoom={false}
                
                >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        )
    };
}

export default MyMapContainer; 