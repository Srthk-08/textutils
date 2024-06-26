import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted the text to upper case","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted the text to lower case","success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text is cleared", "success");
    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied to clipboard", "success");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed", "success");
    }

    const [text, setText] = useState("Enter Text Here");
    // setText("new text") // correct way to set a text
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black', }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text}
                        style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        onChange={handleOnChange} rows="8"></textarea>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
                    <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Extra Space</button>
                </div>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black', }}>
                <h1>Your text summary</h1>
                <p><b>{text.split(" ").length}</b> words</p>
                <p><b>{text.length}</b> characters</p>
                <p><b>{text.split(".").length}</b> sentences</p>
                <p><b>{0.008 * text.split(" ").length}</b> minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Enter something to preview it'}</p>
            </div>
        </>
    )
}

TextForm.propTypes = { heading: PropTypes.string, }
