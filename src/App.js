import React from "react";
import MyMapContainer from "./components/MyMapContainer";

const App = () =>{
    return (
        <div  style={{backgroundColor: "red", height:"200px"}}>
            <h1>
                Welcome to GPX Track Merger.
            </h1>
            <MyMapContainer/>
        </div>
    )
}

export default App;