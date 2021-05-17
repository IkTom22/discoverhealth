

const initialstate=[]

const diseaseReducer = (state=initialstate, action)=>{
    switch(action.type){
        case 'GET_A_DISEASE':
            return {
                ...state, 
                name: action.value,
                overview: action.value,
                knownAs: [action.value],
                symptoms: action.value,
                causes: [action.value],
                effects: [action.value],
                complications: [action.value],
                preventions: [action.value]
            }
           default:
                return state 
    }
}

export default diseaseReducer;