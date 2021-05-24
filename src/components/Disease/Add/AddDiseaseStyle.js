const useStyles = theme => ({
    
    root: {
        marginTop: '3rem',
        width: '60vw'
    },
    form: {
        padding:'2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
        minHeight: '12rem',
        '&>*':{
            width:'90%',
            margin:'1rem',
        },
    },
    textField:{
        width: '100%'
    },
    button:{
        width: '30%',

    }
  });  

  export default useStyles;

  