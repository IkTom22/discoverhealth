import { makeStyles } from '@material-ui/core/styles';


const styles={
    root:{
        width: '90vw',
        height:'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',

    },
    gridone: {
      flexGrow: 1,
      justifyContent: 'center',
      marginTop:'2rem' ,
      marginBottom: '2rem',
     
      '& h1':{
        textAlign:'center',
        fontWeight: 300
      }

    },
    paper: {
      padding: '2rem',
      textAlign: 'center',
     
    },
  };

  export default styles;