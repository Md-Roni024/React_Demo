import React, { useState } from 'react';


export default function TextForm(props) {
const handleUpClick =()=>{
    // console.log("UpperCase Click....")
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert(" Uperrcase Convert Success.","success")
}
const handleLowClick =()=>{
    // console.log("UpperCase Click....")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert(" Lowercase Convert Success.","success")
}
const handleCopyClick =()=>{
    // alert('Helooooo')
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert(" Copy Code Success.","success")
    //navigator.clipboard.writeText('Copy this text to clipboard')
    
}
const handleClearClick =()=>{
    // console.log("UpperCase Click....")
    let newText = ''
    setText(newText)
    props.showAlert(" Clear Code Success.","success")
}
const handleOnChange =(event)=>{
    // console.log("Handle OnChange....")
    setText(event.target.value)
}
const [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className="container"style={{color : props.mode==='dark'?'white':'#042743'}}>
          <h1>{props.heading}</h1>
          <div>
              {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
              <div className="container my-3">
              <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
              <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
              <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
              <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
              </div>
          </div>
    </div>
    <div className="container"style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter Something to Preview for Here..."}</p>
    </div>
    </>
  );
}
