

const initialstate=[]

const diseaseReducer = (state=initialstate, action)=>{
    switch(action.type){
        case 'DISPLAY_A_DISEASE':
            return {
                ...state, 
                ...action.payload
               
            }
           default:
                return state 
    }
}

export default diseaseReducer;