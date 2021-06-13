import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './DiseaseListStyles';


function DisaseList(props){
    const {classes, name, id} = props;

  return (
            
    <Link  to={`/admin/${id}`} className={classes.container}  >
    {name !=='' &&
       <Button variant="outlined"   color="secondary" >
           {name} 
       </Button>
    }
   </Link>

    ) 
    
}

export default withStyles(styles)(DisaseList);