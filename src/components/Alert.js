import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
  return (
    props.alert && <div>
        <div class={`alert alert-${props.alert.type}`} role="alert">
            {capitalize(props.alert.type)} : {props.alert.msg}
        </div>
    </div>
  )
}
