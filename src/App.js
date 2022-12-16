import React, { Component } from "react";
import DragAndDropZone from "./components/DragAndDropZone";
import Map from "./components/Map";
import TrackList from "./components/TrackList";

class App extends Component {

    gpx = "";

    constructor(props){
        super(props);
        this.state = {gpx:{}};
    }

    render (){
        return(
            <>
                <h1>GPX Tools</h1>
                <div className="map-list-container">
                    <div className="map-container">
                        <Map/>
                    </div>
                    <div className="list-container">
                        <TrackList/>
                        <DragAndDropZone onDroppedFile={this.onDroppedFile}/>
                    </div>
                </div>
            </>
        )
    }

    onDroppedFile(file){
        console.log("onDroppedFile");
        this.setState({gpx:file});
    }
}

export default App;