import React, {Component} from 'react';
import {API, graphqlOperation} from 'aws-amplify'

import DiseaseList from '../List/DiseaseList';
import { listDiseases } from '../../../graphql/queries';
import Grid from '@material-ui/core/Grid';



class  DiseaseLists extends Component{
    state={
        diseases: []
    }
    componentDidMount = async ()=>{
        this.getDiseases()
    }
    getDiseases =async () =>{
        const result = await API.graphql(graphqlOperation(listDiseases))
        console.log(result.data.listDiseases.items)
        this.setState({diseases: result.data.listDiseases.items})
    }
    render(){
        const {diseases} = this.state
       
        return (
            <Grid
                container
                justify="flex-start"
                alignItems="center"
                
            >
                {diseases.map((disease) =><DiseaseList  name={disease.name} key={disease.id} {...diseases}/>)}
            </Grid>
        )
        
    } 
    
        
}
    


export default DiseaseLists;