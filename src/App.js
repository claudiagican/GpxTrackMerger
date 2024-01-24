import React, { Component } from "react";
import DragAndDropZone from "./components/DragAndDropZone";
import Map from "./components/Map";
import TrackList from "./components/TrackList";
import gpxParser from 'gpxparser';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {trackList : [], currentTrackIndex : 0};
    }

    render (){
        
        return(
            <>
                <div className="greeting">
                    <h1>Tracks Merger</h1>
                    <h2>put together your GPX tracks</h2>
                </div>

                <div className="map-list-container">
                    <div className="map-container">
                        <Map tracksArray={this.state.trackList}/>
                    </div>
                    <div className="list-container">
                        <TrackList tracksArray={this.state.trackList} onTrackRemove={this.onTrackRemove.bind(this)}/>
                        <DragAndDropZone onFileDrop={this.onFileDrop.bind(this)}/>
                    </div>
                </div>
            </>
        )
    }

    onFileDrop(file){
        console.log("onFileDrop");
        
        const parsedTrack = new gpxParser();
        parsedTrack.parse(file);

        const colors = ['Red', 'Blue', 'Green', 'Yellow', 'SlateBlue', 'Purple', 'Lime', 'Fuchsia', 'Maroon', 'Aqua'];

        const objTrack = {
            objGpx : parsedTrack,
            objColor : colors[this.state.currentTrackIndex]
        }

        this.state.trackList.push(objTrack);
        
        this.setState({trackList: this.state.trackList, currentTrackIndex: this.state.currentTrackIndex + 1});
    }

    onTrackRemove(elem){
        console.log("onTrackRemove");
        console.log(elem);

        this.setState({trackList: this.state.trackList.filter(t => t !== elem)});
    }

}

export default App;