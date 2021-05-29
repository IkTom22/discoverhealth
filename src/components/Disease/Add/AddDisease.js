import React , {useContext}from 'react';
//import {API, graphqlOperation} from 'aws-amplify';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import {DispatchDContext} from '../../../contexts/disease.context';
import useInputState from '../../../hooks/useInputState';
import {jointWords} from '../../../helper/helper';
import styles from './AddDiseaseStyle';


const  AddDisease= (props)=> { 
    const {classes} = props;
    const [value, handleChange, reset] = useInputState("");
    const dispatch= useContext(DispatchDContext)
    ValidatorForm.addValidationRule('isNameNotEmpty', value => 
                value !== ''
        );
    const handleAddDisease=  e=>{
        e.preventDefault();
        const slugWords= jointWords(value);
        const slugJointed=slugWords.join('_')
        dispatch({type: "CREATE_DISEASE", name:value, slug: slugJointed })
        reset();
    } 
        return(
            <Container  className={classes.root}>
                <Paper variant="outlined" >
                    <ValidatorForm noValidate autoComplete="off" className={classes.form} onSubmit = {handleAddDisease}>
                        <TextValidator
                            required  
                            validators={["isNameNotEmpty"]}
                            errorMessages={["Enter Disease Name"]}
                            type="string"
                            id="standard-basic" 
                            label="Add Disease Name" 
                            color="secondary"
                            name='name'
                            value={value}
                            onChange={handleChange}
                            className={classes.textField}
                         />

                        <Button variant="outlined" type="submit" className={classes.button} color="secondary" >
                            Add Disease
                        </Button>
                    </ValidatorForm>
                </Paper>
            </Container>
            
        )
   
    
}
export default withStyles(styles)(AddDisease);

