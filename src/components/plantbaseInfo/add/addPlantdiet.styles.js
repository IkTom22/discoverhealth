const styles={
    root:{
        width: '100%',
        height: 'auto'
    },
    paper: {
        width: '90%',
        padding: '5%',
        height: 'auto'
      },
      textField:{
        width: '100%',
    },
    title:{
        width: '100%',
        textAlign: 'center',
        fontWeight: 300
    }, 
    
    form: {
        padding:'1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
        minHeight: '12rem',
        '&>*':{
            width:'100%',
            margin:'1rem',
        },
    },
    
    description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        padding: 0,
        fontWeight: 300,
    },
    add: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '1.5rem',
    },
    descTitle:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        '& h4':{
            fontWeight: 400,
        },
        '& addButton': {
            width: '20px ! important',
            height: '20px ! important'
        },
        GamepadButton: {
            backgroundColor:'pink',
            color: 'white'

        }
        

    }

  };
  export default styles;