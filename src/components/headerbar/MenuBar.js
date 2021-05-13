import React from 'react';
import {AmplifySignOut}from '@aws-amplify/ui-react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,  Toolbar, AppBar, Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    menuBar: {
        marginTop: "2rem",
        padding:"1rem",
        backgroundColor: "black",
        

    },
    menuButton: {
      marginRight: "1rem",
      marginLeft: "auto",
     
    '&:hover':{
        backgroundColor:"white"
    }    
      
    },
    
    title: {
      flexGrow: 1,
    },
  }));

const MenuBar = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static"className={classes.menuBar}>
                <Toolbar>
                    <Typography variant="h5" edge="start" className={classes.title}>
                        Discover Health
                    </Typography>
                    
                   <AmplifySignOut className={classes.menuButton}/>
                </Toolbar>
                
            </AppBar>
        </div>
        
        
    )
}

export default MenuBar;