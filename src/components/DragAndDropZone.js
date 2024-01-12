import React from "react";
import classes from "./DragAndDropZone.css"

function DragAndDropZone(props) {

  const [dragActive, setDragActive] = React.useState(false);

  const inputRef = React.useRef(null);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {

      console.log("handleDrop ", e.dataTransfer.files[0]);

      const file = e.dataTransfer.files[0];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      var fileSize = (file.size / 1024 / 1024).toFixed(2);
      
      if (fileExtension === 'gpx' && fileSize < 5) { // 5MB
        handleFile(file);
      } else {
        e.dataTransfer.dropEffect = "none";
      }

    }
  };

  const handleWithClick = function (e) {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      console.log("handleChange");
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = function(file){
    console.log(file);

    var reader = new FileReader();
    reader.onload = function (e) {
      props.onFileDrop(reader.result); 
    }
    reader.readAsText(file);
  }


  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" accept=".gpx" id="input-file-upload" multiple={true} onChange={handleWithClick} />
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
          <div>
            <p>Drag and drop a .gpx file</p>
            <button className="upload-button" onClick={onButtonClick}>or Upload</button>
            <p><small>(less than 5MB)</small></p>
          </div>
        </label>
        {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
      </form>
    </>
  );
};

export default DragAndDropZone;