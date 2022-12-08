import 'leaflet/dist/leaflet.css'
import React, { Component } from 'react'
import { MapContainer, Polyline, TileLayer } from 'react-leaflet'
import gpxParser from 'gpxparser'

class MyMapContainer extends Component {

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

    httpGet(theUrl)
    {
      var xmlHttp = null;
  
      xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false );
      xmlHttp.send( null );
      return xmlHttp.responseText;
    };

    loadGPX(){

        var reader = new FileReader();
        var url = 'http://localhost:3000/Afternoon_Run.gpx';
        
        var contentGpxFile = this.httpGet(url);
        
        var gpx = new gpxParser();
        gpx.parse(contentGpxFile);
        console.log(gpx);
        
        this.positions = gpx.tracks[0].points.map(p => [p.lat, p.lon]);
        this.setState({positions:this.positions});
    }

    async componentDidMount() {
        this.loadGPX();
    };

    render (){
        console.log(typeof(this.state.lat) + " - " + this.state.long);
        return(
            <MapContainer
                //center={[this.state.lat, this.state.long]}
                center={[47.37635575792042, 9.548300497691613]} 
                zoom={5}
                scrollWheelZoom={true} 
                className='harta' >
                
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                <Polyline pathOptions={{ fillColor: 'red', color: 'blue' }} 
	                positions={this.state.positions}
                />
            </MapContainer>
        )
    };
}

export default MyMapContainer; 