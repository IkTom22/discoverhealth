import React , {Component}from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './AddDiseaseStyle';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import {API, graphqlOperation} from 'aws-amplify';
import {createDisease}from '../../../graphql/mutations';


 
class AddDisease extends Component { 
     state={
        name: '',
        overview: ''
    }

    handleAddDisease= async e=>{
        e.preventDefault();
        const input = {
            name: this.state.name,
            overview: this.state.overview
        }
        await API.graphql(graphqlOperation(createDisease, {input}))
        this.setState({name: '', overview:''})
    }
    handleChange=(e)=>this.setState({
        [e.target.name]:e.target.value
    })
    render(){
        const {classes} = this.props;
        return(
            <Container  className={classes.root}>
                <Paper variant="outlined" >
                    <form noValidate autoComplete="off" className={classes.form} onSubmit = {this.handleAddDisease}>
                        <TextField 
                            required  
                            id="standard-basic" 
                            label="Add Disease Name" 
                            color="secondary"
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                         />
                        <TextField  
                            required id="outlined-basic" 
                            label="Add Description" 
                            variant="outlined" 
                            multiline  
                            name='overview'
                            color="secondary" 
                            value={this.state.overview}
                            onChange={this.handleChange}    
                        />
                        <Button variant="outlined" type="submit" className={classes.button} color="secondary" >
                            Add Disease
                        </Button>
                    </form>
                </Paper>
            </Container>
            
        )
    }
    
}
export default withStyles(styles)(AddDisease);


