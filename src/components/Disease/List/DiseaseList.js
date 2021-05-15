import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './DiseaseListStyles';


function DisaseList(props){
    const {classes, name, id} = props;
    return (
        <div className={classes.container}>            
                <Button variant="outlined"   color="secondary" id={id}>
                    {name}
                </Button>
        </div>

    )
}

export default withStyles(styles)(DisaseList);