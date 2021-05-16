import React from 'react'

function InfoByDisease(props){
    console.log(props)
    return (
        <h1>{props.match.params.slug}</h1>
    )
}
export default InfoByDisease;
