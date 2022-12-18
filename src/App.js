import React, { Component } from "react";
import DragAndDropZone from "./components/DragAndDropZone";
import Map from "./components/Map";
import TrackList from "./components/TrackList";
import gpxParser from 'gpxparser';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {track : null};
    }

    render (){
        
        return(
            <>
                <h1>GPX Tools</h1>
                <div className="map-list-container">
                    <div className="map-container">
                        <Map track={this.state.track}/>
                    </div>
                    <div className="list-container">
                        <TrackList/>
                        <DragAndDropZone onFileDrop={this.onFileDrop.bind(this)}/>
                    </div>
                </div>
            </>
        )
    }

    onFileDrop(file){
        console.log("onFileDrop");
        
        var parsedTrack = new gpxParser();
        parsedTrack.parse(file);
        
        this.setState({track:parsedTrack});
    }

}

export default App;