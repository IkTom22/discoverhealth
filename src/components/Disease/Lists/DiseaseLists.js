import React, {useContext} from 'react';
//import {API, graphqlOperation} from 'aws-amplify'
import DiseaseList from '../List/DiseaseList';
import {DiseasesContext} from '../../../contexts/disease.context'
//import { listDiseases } from '../../../graphql/queries';
import Grid from '@material-ui/core/Grid';


const DiseaseLists =(props) =>{

    const diseases = useContext(DiseasesContext)
   
    console.log(diseases)


    // state={
    //     diseases: []
    // }

    // componentDidMount = async ()=>{
    //     this.getDiseases()
    // }

    // const getDiseases =async () =>{
    //     // const result = await API.graphql(graphqlOperation(listDiseases))
    //     //console.log(result.data.listDiseases.items)
    //     // this.setState({diseases: result.data.listDiseases.items})
        
    // }
    
  
       
       
        return (
            <Grid
                container
                justify="flex-start"
                alignItems="center"
                
            >
            {diseases.map((disease) =><DiseaseList  name={disease.name} key={disease.id} {...disease}/>)}

            </Grid>
        )
        
        
        
}
    


export default DiseaseLists;