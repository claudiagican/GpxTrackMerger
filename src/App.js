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
                <h1>
                    GPX Tools
                </h1>
                <MyMapContainer/>
                <TrackList/>
                <DragAndDropFile onDroppedFile={this.onDroppedFile}/>
            </>
        )
    }

    onDroppedFile(file){
        console.log("onDroppedFile");
        this.setState({gpx:file});
    }
}

export default App;