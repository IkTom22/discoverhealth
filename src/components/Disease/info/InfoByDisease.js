import React,  {useEffect, useReducer} from 'react';
import {API, graphqlOperation}from 'aws-amplify'
import {getDisease}from '../../../graphql/queries'

const initialstate={
    name: '',
    slug: '',
    knownAs: [''],
    overview: '',
    symptoms:  '',
    causes: [''],
    effects: [''],
    complications: [''],
    preventions: ['']
}


// function getMyDisease (props){
//     console.log(props)
//     const pageId=props.match.params.slug;
//     const input={id: {pageId}}
//  //const input = {id: "215d5175-2dd7-4eeb-9953-b3aac429e69f"}
//     const result =  API.graphql(graphqlOperation(getDisease, {input}))
//     console.log(result.data.getDisease.name)
//     return result.data

// }
// getMyDisease()





const InfoByDisease=(props)=>{
    console.log(props)
    const pageId=props.match.params.slug;
    console.log(pageId)
    async function getAdisease(){
        const input={id: pageId}
        const result =await API.graphql(graphqlOperation(getDisease, input))
        console.log(result.data)
    }
    useEffect(()=>{getAdisease()})
    
        return (
            <h1>Hi</h1>
        )
    
    
}
export default InfoByDisease;
