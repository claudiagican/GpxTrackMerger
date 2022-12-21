import React, { Component } from 'react'

class TrackList extends Component{

    render(){
        console.log("trackList map render...");
        var info = null;
        
        if (this.props.tracksArray != null && this.props.tracksArray !== 'undefined'){

            console.log(this.props.tracksArray.tracks[0]);
            info = this.props.tracksArray.tracks[0];
        }

        // const listItems = numbers.map((number) =>
        //     <li>{number}</li>
        // );

        return(
            <div>Your Tracks here!

                {(this.props.tracksArray != null && this.props.tracksArray !== 'undefined') ? (
                    <ol>
                        <li>{info.name} * {info.distance.total / 1000}km * {info.elevation.max}m+</li>
                    </ol>
                ) : ''                  
                }
            </div>
        )
        
    }
}

export default TrackList;