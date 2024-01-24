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

        var trackColor = this.props.elem.objColor;
        var trackElem = this.props.elem.objGpx.tracks[0];

        return(
            <li>
                <div className="list-tracks-elem" style={{borderColor: trackColor}}>
                    <code><span>Name: {trackElem.name}</span><br/>
                    <span>Distance: {parseFloat(trackElem.distance.total / 1000).toFixed(2)}km.</span><br/>
                    <span>Elevation: {parseFloat(trackElem.elevation.max).toFixed(2)}m+</span><br/>
                    </code>
                    
                    <button type="button" onClick={() => this.props.onTrackRemove(this.props.elem)} className="btnRemove">
                        Remove
                    </button>
                </div>
            </li>
        )
    }

}


export default TrackList;