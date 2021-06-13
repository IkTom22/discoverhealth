import { v4 as uuidv4 } from 'uuid';


const diseasesReducer = (state, action)=>{
    switch(action.type){
        case 'CREATE_DISEASE':
            return [...state, {id: uuidv4(), name: action.name, slug: action.slug}]
        // case 'DISPLAY_A_DISEASE':
        //     return state.filter(disease => 
        //         disease.Id === action.Id 
        //        ? {...disease, ...action.payload}
        //        : disease
        //         )

           default:
                return state 
    }
}

export default diseasesReducer;