import React, { Component } from "react";
import DragAndDropFile from "./components/DragAndDropFile";
import MyMapContainer from "./components/MyMapContainer";
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
                        <MyMapContainer/>
                    </div>
                    <div className="list-container">
                        <TrackList/>
                        <DragAndDropFile onDroppedFile={this.onDroppedFile}/>
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