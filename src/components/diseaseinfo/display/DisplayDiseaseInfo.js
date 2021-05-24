import React from 'react';
import { Paper } from '@material-ui/core';
import {  withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './displayDiseaseInfo.style';



function DisplayDiseaseInfo(props){
    const {classes , state}= props
    console.log(state)
    return (
        <Paper className={classes.paper}>
            <h3 className={classes.title}>Disease details</h3>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>name:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {state.name}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>overview</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {state.overview}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>known as</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {state.knownAs}
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
                >
                    <Typography className={classes.heading}>symptoms</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {state.symptoms}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
                >
                    <Typography className={classes.heading}>causes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {state.causes}
                    </Typography>
                </AccordionDetails>
            </Accordion> 
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
                >
                    <Typography className={classes.heading}>riskFactors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {state.riskFactors}
                    </Typography>
                </AccordionDetails>
            </Accordion> 
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
                >
                    <Typography className={classes.heading}>complications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {state.complications}
                    </Typography>
                </AccordionDetails>
            </Accordion> 
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
                >
                    <Typography className={classes.heading}>preventions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {state.preventions}
                    </Typography>
                </AccordionDetails>
            </Accordion>            
        </Paper>
        
    )
}

export default withStyles(styles)(DisplayDiseaseInfo);