import React from 'react';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import styles from './descriptionDraftListItem.styles';



function DescriptionDraftListItem(props){
    
    const {classes, key} =props
    console.log(key)
    return(
        <Paper className={classes.container}>
        
            <div>{props.description}</div>
            <div className={classes.buttonContainer}>
                <IconButton color="primary" aria-label="edit">
                    <EditIcon />
                </IconButton>
            
                <IconButton color="secondary" aria-label="delete">
                    <DeleteIcon/>
                </IconButton>
            </div>
        </Paper>
        
    )
}

export default withStyles(styles)(DescriptionDraftListItem);