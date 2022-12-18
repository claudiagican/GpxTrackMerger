import 'leaflet/dist/leaflet.css'
import classes from "./Map.css"
import React, { Component } from 'react'
import { MapContainer, Polyline, TileLayer } from 'react-leaflet'
import gpxParser from 'gpxparser'

class Map extends Component {

    lat = 0; long = 0;
    positions = [];
    
    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
              this.lat =  position.coords.latitude;
              this.long = position.coords.longitude;
              console.log(this.lat + " " + this.long);
              this.setState({lat:this.lat, long:this.long});
          });
        } else { 
          this.lat =  0;
          this.long = 0;
        }
    };

    constructor(props){
        super(props);
        this.state = {lat:0, long:0, positions:[]};
        this.getLocation();
        
    }

    loadGPX(gpxTrack){

        console.log("loadGPX");

        if (gpxTrack == ''){
            return;
        }
        
        this.positions = gpxTrack.tracks[0].points.map(p => [p.lat, p.lon]);
        this.setState({positions:this.positions});
    }

    render (){
        console.log(typeof(this.state.lat) + " - " + this.state.long);
        
        console.log("map render...");
        console.log(this.props.track);
        var points = [];
        if (this.props.track != null){
            points = this.props.track.tracks[0].points.map(p => [p.lat, p.lon]);
        }
                
        return(
            <MapContainer
                //center={[this.state.lat, this.state.long]}
                center={[47.37635575792042, 9.548300497691613]} 
                zoom={5}
                scrollWheelZoom={true} 
                className='map' >
                
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                <Polyline pathOptions={{ fillColor: 'red', color: 'blue' }} 
	                positions={points}
                    
                />

            </MapContainer>
        )
    };
}

export default Map; 