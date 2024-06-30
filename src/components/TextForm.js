import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleonClick = () => {
    console.log("lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleclearClick = () => {
    console.log("Clear click ");
    setText("");
  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }

  const handleclearspace = () => {
    console.log("cleared spaces");
    let newText = text.replace(/\s+/g, ' '); // replace one or more spaces with a single space
    setText(newText);
  }

  return (
    <>
      <div className="container">
        <h1>{props.heading}  </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-warning mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-warning mx-2" onClick={handleonClick}>Convert To Lowercase</button>
        <button className="btn btn-warning mx-2" onClick={handleclearClick}>Clear Form</button>
        <button className="btn btn-warning mx-2" onClick={handleclearspace}>Clear Spaces</button>

      </div>
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Word {text.length} In the Character</p>
        <p>You Read in {0.008 * text.split(" ").length} Seconds</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}