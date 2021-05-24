const initialstate = []
const plantDietReducer = (state=initialstate, action)=>{
    switch(action.type){
        case 'GET_ID':
            return {
                ...state,
                ...action.payload
            }    
            default:
                return state
    }
}
export default plantDietReducer