import React, {useState} from 'react'

export default function TextArea(props) {
    // usestate for Cases change
    const[upperCase, changeCase]=useState("Click to Convert Upper Case")
    
    const[caseText, functionCase]=useState("")

    // to type in the text area 
    const handleOnChange = (event) => {
        console.log("onChage running")
        functionCase(event.target.value)
      }

    // function to convert the upper case and lower case 
    const convertUpper = () => {
        if (upperCase==="Click to Convert Upper Case"){
            changeCase("Click to Convert Lower Case")
            let newText=caseText.toUpperCase()
            functionCase(newText)
            props.showAlert("Converted to Upper Case", "success")
          }
        else{
            changeCase("Click to Convert Upper Case")
            let newText=caseText.toLowerCase()
            functionCase(newText)
            props.showAlert("Converted to Lower Case", "success")
        }
    }  
    // Clear the content
    const clearText = () => {
        functionCase("")
    }
    const trimmedText=caseText.trim()
      
  return (
    <>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <div className="form-size">
        <textarea className="form-control" value={caseText}  onChange={handleOnChange} placeholder="Enter text here" id="floatingTextarea" rows="8" cols="20"  style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"black"}}></textarea>
        
        </div>
        <button className='btn btn-primary my-3 mx-3' onClick={convertUpper}>{upperCase}</button>
        <button className='btn btn-primary my-3' onClick={clearText} >Clear Text</button>
    </div>
    <div className="container">
        <h1 style={{color:props.mode==="dark"?"white":"black"}}>Preview</h1>
        <p  style={{color:props.mode==="dark"?"pink":"black"}}>{caseText}</p>
        <p  style={{color:props.mode==="dark"?"yellow":"black"}}>Total Number of letters in text is {caseText.length} and total words are {trimmedText === "" ? 0 : trimmedText.split(" ").length} </p>
    </div>
    </>
  )

}