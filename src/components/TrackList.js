import React, { Component } from 'react'

class TrackList extends Component{

    render(){
        console.log("trackList map render...");
        var elemList = null;
        
        if (this.props.tracksArray.length != 0){
           
            elemList = this.props.tracksArray.map((elem) =>
            {
                return(
                    <li>{elem.tracks[0].name} * {elem.tracks[0].distance.total / 1000}km * {elem.tracks[0].elevation.max}m+</li>
                )
            })
        }

        return(
            <div>Drag your GPX tracks here

                <ol>
                    {elemList}               
                </ol>
            </div>
        )
        
    }
}

export default TrackList;