const useStyles = theme => ({
    
    root: {
        marginTop: '3rem',
        width: '60vw'
    },
    form: {
        padding:'2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:'center',
        minHeight: '12rem',
        '&>*':{
            width:'90%',
            margin:'1rem',
        },
    },
    button:{
        width: '30%',

    }
  });  

  export default useStyles;

  