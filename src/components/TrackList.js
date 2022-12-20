import React, { Component } from 'react'

class TrackList extends Component{

    render(){
        console.log("trackList map render...");
        var info;
        if (this.props.track != null){

            console.log(this.props.track.tracks[0]);
            info = this.props.track.tracks[0];
        }

        return(
            <div>Your Tracks here!

                if (this.props.track != null){
                    <ol>
                        <li>{info.name} * {info.distance.total / 1000}km * {info.elevation.max}m+</li>
                    </ol>                  
                    
                }
            </div>
        )
        
    }
}

export default TrackList;