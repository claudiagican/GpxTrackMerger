import 'leaflet/dist/leaflet.css'
import classes from "./Map.css"
import React, { Component } from 'react'
import { MapContainer, Polyline, TileLayer, useMap } from 'react-leaflet'
import { FullscreenControl } from 'react-leaflet-fullscreen'
import gpxParser from 'gpxparser'
import "react-leaflet-fullscreen/styles.css"


class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {lat:0, long:0};
        this.getLocation();
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log("getLocation...");
                this.setState({lat:position.coords.latitude, long:position.coords.longitude});
            });
        } 
    };

    render() {
        
        console.log("map render...");
        console.log(this.state.lat + " - " + this.state.long);
        console.log(this.props.tracksArray);
        
        var points = [];
        var polylineList;
        var latMin = this.state.lat, latMax = this.state.lat, longMin = this.state.long, longMax = this.state.long;

        polylineList = this.props.tracksArray.map((elem, index) =>
        {
            var trackColor = elem.objColor;
            var trackElem = elem.objGpx.tracks[0];

            points = trackElem.points.map(p => [p.lat, p.lon]);

            // TODO to move in a method and use properly
            latMin = Math.min(...points.map(p => p[0]));
            latMax = Math.max(...points.map(p => p[0]));
            longMin = Math.min(...points.map(p => p[1]));
            longMax = Math.max(...points.map(p => p[1]));

            return (
                <Polyline pathOptions={{ fillColor: trackColor, color: trackColor }} positions={points} key={index}/>
            )
        });

               
        return(
            <MapContainer scrollWheelZoom={true} className='map'>
                
                <ChangeBounds bounds={[latMin, latMax, longMin, longMax]}/>
                
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <FullscreenControl />
                
                {polylineList}
             
            </MapContainer>
        )
    };
}

function ChangeBounds({bounds}){

    if(bounds[0] == 0) 
        return null;

    const map = useMap();

    if (bounds[0] == bounds[1]) { 
        map.setView([bounds[0],  bounds[2]], 9);
    } else {
        var currentBounds = map.getBounds();
        
        console.log(currentBounds);
        
        currentBounds.getSouthWest().lat = bounds[0];
        currentBounds.getSouthWest().lng = bounds[2];
        
        currentBounds.getNorthEast().lat = bounds[1];
        currentBounds.getNorthEast().lng = bounds[3];
        
        map.fitBounds(currentBounds);
    }

    return null;
}

export default Map; 