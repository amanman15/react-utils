import React from 'react'

export default function Alert(props) {
    // function to capitalize the first letter
    const capitalize = (word) =>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() +lower.slice(1)
    }
    // function can chnage the name
    const changeName = () => {
        const name="I have Chnaged"
        return name
    }
  return (
    // if props.alert is null then it will not evaluate
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
{/* removed the close button */}
    </div>
  )
}
