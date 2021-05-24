import React , {Component}from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import {createDisease}from '../../../graphql/mutations';
import {jointWords} from '../../../helper/helper';
import styles from './AddDiseaseStyle';


class AddDisease extends Component { 
     state={
        name: '',
        // overview: '',
        slug: ''
    }

    handleAddDisease= async e=>{
        e.preventDefault();
        const{name}=this.state;
        const slugWords= jointWords(name);
        console.log(slugWords);
        const slugJointed=slugWords.join('_')

        const input = {
            name: name,
            // overview: overview,
            slug:slugJointed
        }
        await API.graphql(graphqlOperation(createDisease, {input}))
        this.setState({name: ''})
    }
    handleChange=(e)=>this.setState({
        [e.target.name]:e.target.value
    })
   
    render(){
        const {classes} = this.props;
         ValidatorForm.addValidationRule('isNameNotEmpty', value => 
                value !== ''
        );
        return(
            <Container  className={classes.root}>
                <Paper variant="outlined" >
                    <ValidatorForm noValidate autoComplete="off" className={classes.form} onSubmit = {this.handleAddDisease}>
                        <TextValidator
                            required  
                            validators={["isNameNotEmpty"]}
                            errorMessages={["Enter Disease Name"]}
                            type="string"
                            id="standard-basic" 
                            label="Add Disease Name" 
                            color="secondary"
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
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
    
}
export default withStyles(styles)(AddDisease);


                        // <TextField  
                        //     required id="outlined-basic" 
                        //     label="Add Description" 
                        //     variant="outlined" 
                        //     multiline  
                        //     name='overview'
                        //     color="secondary" 
                        //     value={this.state.overview}
                        //     onChange={this.handleChange}    
                        // />