import React, { useReducer, useContext, useEffect } from "react";
// import {API, graphqlOperation}from 'aws-amplify'
// import {getDisease}from '../../../graphql/queries'
import {
  DiseasesContext,
  DispatchDContext,
} from "../../../contexts/disease.context";
import diseaseReducer from "../../../reducers/disease.reducer";
import { Container, Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./infoByDisease.style";
import DisplayDiseaseInfo from "../../diseaseinfo/display/DisplayDiseaseInfo";
import AddPlantInfo from "../../plantbaseInfo/add/AddPlantInfo";
import axios from "axios";

const initialstate = {
  id: "",
  name: "",
  slug: "",
  knownAs: [""],
  overview: "",
  symptoms: "",
  causes: [""],
  riskFactors: [""],
  complications: [""],
  preventions: [""],
};

const InfoByDisease = (props) => {
  const { classes } = props;
  const diseases = useContext(DiseasesContext);
  // const dispatchD = useContext(DispatchDContext)
  const pageId = props.match.params.slug;
  console.log(pageId);
  // const [state, dispatch]=useReducer(diseaseReducer, initialstate)
  console.log(diseases);
  //  async function getAdisease(){
  //     dispatch({type: 'DISPLAY_A_DISEASE', id: pageId})
  //  }

  const disease = diseases.filter(
    (disease) => disease.id === pageId && disease
  );
  const diseaseInfo = disease[0];

  // useEffect(()=>{getAdisease()
  //  },[])

  // const input={id: pageId}

  // async function getAdisease(){
  //     const result =await API.graphql(graphqlOperation(getDisease, input))
  //     const currentDisease = result.data.getDisease
  //     dispatch({type:'DISPLAY_A_DISEASE', payload: currentDisease })

  // }
  // useEffect(()=>{getAdisease()
  // },[])

  return (
    <Container className={classes.root}>
      <Grid container className={classes.gridone} spacing={2}>
        <Grid item xs={6}>
          <h1>{diseaseInfo.name}</h1>
        </Grid>
      </Grid>
      <Grid container className={classes.gridone} spacing={2}>
        <Grid item xs={6}>
          <DisplayDiseaseInfo state={diseaseInfo} />
        </Grid>
        <Grid item xs={6}>
          <AddPlantInfo diseaseID={diseaseInfo.id} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Meat</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default withStyles(styles)(InfoByDisease);
