import React, {useState} from 'react'

export default function TextArea() {
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
          }
        else{
            changeCase("Click to Convert Upper Case")
            let newText=caseText.toLowerCase()
            functionCase(newText)
        }
    }  
    // Clear the content
    const clearText = () => {
        functionCase("")
    }
    const trimmedText=caseText.trim()
      
  return (
    <>
    <div className="container">
        <div className="form-size">
        <textarea className="form-control" value={caseText} onChange={handleOnChange} placeholder='Enter text here' id="floatingTextarea" rows="8" cols="20"></textarea>
        </div>
        <button className='btn btn-primary my-3 mx-3' onClick={convertUpper} >{upperCase}</button>
        <button className='btn btn-primary my-3' onClick={clearText} >Clear Text</button>
    </div>
    <div className="container">
        <h1>Preview</h1>
        <p>{caseText}</p>
        <p>Total Number of letters in text is {caseText.length} and total words are {trimmedText === "" ? 0 : trimmedText.split(" ").length} </p>
    </div>
    </>
  )

}