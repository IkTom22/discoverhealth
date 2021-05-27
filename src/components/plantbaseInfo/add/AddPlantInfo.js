import React, {Component} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {createPlantDiet} from '../../../graphql/mutations';
//import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Paper, IconButton, Container,  TextareaAutosize, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import styles from './addPlantInfo.styles';
import DescriptionDraftListItem from '../../descriptions/drafts/DescriptionDraftListItem';
import { v4 as uuidv4 } from 'uuid';
import{ ColorButton} from '../../../styles/colors'


class AddPlantInfo extends Component {
    constructor(props){
        super(props)
        console.log(props.diseaseID)
        this.state = {   
            id: '',             
            title: '',
            diseaseID: props.diseaseID ,
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
        
        const {title, diseaseID, descriptions} = this.state    

        const input = {
            title: title,
            diseaseID: diseaseID,
            descriptions: descriptions.content
        }
        await API.graphql(graphqlOperation(createPlantDiet, {input}))
        this.setState({
            title: '',
            description: {id: '', content: ''},
            descriptions: []
        })

    }
    handleEdit = (e)=>{
        this.setState({discription: {id:'', content: ''}})
    }
    render(){
        const {classes}= this.props
        
        const {title,  description, descriptions, id} = this.state
        
        return(
            <Container  className={classes.root}>
                <Paper className={classes.paper}>
                    <h3 className={classes.title}>{id !=='' ? 'Edit Plantbase Info': 'Add Plantbase Info'}</h3>
                
                    <form className={classes.form} onSubmit = {this.handleAddPlantDiet}>
                        <TextField
                            required  
                            type="string"
                            id="standard-basic" 
                            label="Title" 
                            color="secondary"
                            name='title'
                            value={title}
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
                                    value={description.content}
                                    onChange={this.handleChange}
                                    className={classes.textField}
                                />
                                
                        </div>
                        {descriptions !==[] &&
                            <div >
                                {descriptions.map(description =><DescriptionDraftListItem key={1} description={description} {...this.state}/>)}
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

export default withStyles(styles)(AddPlantInfo);