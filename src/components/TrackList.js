import classes from "./DragAndDropFile.css"
import DragAndDropFile from "./DragAndDropFile"

function TrackList(){
    return(
        <div className={classes.mainDiv} style={{ width: '400px' }}>
            
            <DragAndDropFile />
        </div>
    )
}

export default TrackList;