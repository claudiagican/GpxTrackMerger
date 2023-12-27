import React, { Component } from 'react'
import classes from "./TrackList.css"

class TrackList extends Component{

    render(){
        var elemList = null;
        
        if (this.props.tracksArray.length != 0){
           
            elemList = this.props.tracksArray.map((elem, index) =>
            {
                return(
                    <TrackListItem elem={elem} key={index} onTrackRemove={this.props.onTrackRemove}/>
                )
            })
        }

        return(
            <div>Your GPX tracks 

                <ol className="list-tracks">
                    {elemList}               
                </ol>
            </div>
        )
       
    }

}

class TrackListItem extends Component{
    render(){

        var trackElem = this.props.elem.tracks[0];

        return(
            <li>
                
                <div className="list-tracks-elem">
                    <p>Name: {trackElem.name}</p>
                    <p><span>Distance {parseFloat(trackElem.distance.total / 1000).toFixed(2)}km. </span>
                    <span>Elevation {parseFloat(trackElem.elevation.max).toFixed(2)}m+</span>
                    </p>
                    
                    <button type="button" onClick={() => this.props.onTrackRemove(this.props.elem)}>
                        Remove
                    </button>
                </div>
            </li>
        )
    }

}


export default TrackList;