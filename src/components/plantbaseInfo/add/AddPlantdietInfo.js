import React, {Component} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {createPlantDiet} from '../../../graphql/mutations';
//import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Paper, Button, IconButton, Container,  TextareaAutosize, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import styles from './addPlantdiet.styles';
import DescriptionDraftListItem from '../../descriptions/drafts/DescriptionDraftListItem';
import { green, purple } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
    root: {
    //   color: theme.palette.getContrastText(purple[500]),
    //   backgroundColor: purple[500],
      color: green['A400'],
    //   '&:hover': {
    //     backgroundColor: purple[700],
    //   },
    },
  }))(Button);

class AddPlantdietInfo extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {   
            id: '',             
            name: '',
            diseaseID: this.props.diseaseID ,
            description: '',
            descriptions:[]
            
        }
    }   
  
    handleAddDescription=(e)=>{
        const{description, descriptions}= this.state
        e.preventDefault()
        if(description !=='')  {
            const newDescriptions = descriptions.push(description)
            this.setState({discriptions: newDescriptions})
            this.setState({description: ''})
        }
        
    }
    handleChange=(e)=>this.setState({
        [e.target.name]:e.target.value
    })

     handleAddPlantDiet=async (event)=>{
        event.preventDefault();
        
        const{diseaseID}= this.props

        const input = {
            diseaseID: diseaseID
        }
        await API.graphql(graphqlOperation(createPlantDiet, {input}))
        this.setState({diseaseID: ''})
       console.log(this.state)
    }
    
    render(){
        const {classes}= this.props
        
        const {name,  diseaseID, description, descriptions, id} = this.state
        
        return(
            <Container  className={classes.root}>
                <Paper className={classes.paper}>
                    <h3 className={classes.title}>{id !=='' ? 'Edit Plantbase Info': 'Add Plantbase Info'}</h3>
                
                    <form className={classes.form} onSubmit = {this.handleAddPlantDiet}>
                        <TextField
                            required  
                            type="string"
                            id="standard-basic" 
                            label="Name" 
                            color="secondary"
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                            className={classes.textField}
                         />
                        
                        <Container className={classes.description}>
                            <div className={classes.add}>
                                <div className={classes.descTitle}>
                                    <h4>Descriptions</h4> 
                                
                                    <IconButton 
                                        type="submit"
                                        color="secondary"
                                        aria-label="add a description" 
                                        className={classes.addButton} 
                                        onClick={this.handleAddDescription}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </div>
                                <TextareaAutosize
                                    type="string"
                                    id="standard-basic" 
                                    aria-label="minimum height" 
                                    rowsMin={3}
                                    placeholder="Description" 
                                    color="secondary"
                                    name='description'
                                    rows="3"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    className={classes.textField}
                                />
                                
                        </div>
                        {descriptions !==[] &&
                            <div >
                                {descriptions.map(description =><DescriptionDraftListItem key={description} description={description}/>)}
                            </div>
                        }
                        </Container>
                       
                        <ColorButton variant="outlined" type="submit" className={classes.button} color="primary">
                            Submit 
                        </ColorButton>
                    </form>
                
                </Paper>
            </Container>
    
        )
    }
   
}

export default withStyles(styles)(AddPlantdietInfo);