import 'leaflet/dist/leaflet.css'
import classes from "./Map.css"
import React, { Component } from 'react'
import { MapContainer, Polyline, TileLayer, useMap } from 'react-leaflet'
import gpxParser from 'gpxparser'

class Map extends Component {

    constructor(props){
        super(props);
        this.state = {lat:0, long:0};
        this.getLocation();
    }

    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
              this.setState({lat:position.coords.latitude, long:position.coords.longitude});
          });
        } 
    };

    render (){
        
        console.log("map render...");
        console.log(this.state.lat + " - " + this.state.long);
        console.log( this.props.tracksArray);
        var points = [];
        var polylineList;
        var colors = ['red', 'blue', 'green', 'yellow'];

        // if (this.props.tracksArray.length != 0){

            polylineList = this.props.tracksArray.map((elem, index) =>
            {
                points = elem.tracks[0].points.map(p => [p.lat, p.lon]);

                return(
                    <Polyline pathOptions={{ fillColor: colors[index], color: colors[index] }} positions={points} key={index}/>
                )
            });
        // }
                
        return(
            <MapContainer
                // center={[this.state.lat, this.state.long]}
                // center={[47.37635575792042, 9.548300497691613]} 
                zoom={9}
                scrollWheelZoom={true} 
                className='map' >
                <ChangeView center={[this.state.lat, this.state.long]} zoom={13} /> 
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                {polylineList}

            </MapContainer>
        )
    };
}

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default Map; 