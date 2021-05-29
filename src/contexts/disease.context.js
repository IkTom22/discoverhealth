import React, {createContext} from 'react';
import { useLocalStorageReducer }from '../hooks/useLocalStorageReducer';
import diseasesReducer from '../reducers/disease.reducer';



const defaultDiseasesState = [
    {
        id: '',
        name:'',
        slug: '',
        knownAs: [''],
        // overview: '',
        // symptoms:  '',
        // causes: [''],
        // riskFactors: [''],
        // complications: [''],
        preventions: ['']
    }
]
export const DiseasesContext = createContext();
export const DispatchDContext= createContext();

export function DiseasesProvider (props){
    const [diseases, dispatch]= useLocalStorageReducer("diseases", defaultDiseasesState, diseasesReducer)
    return (
        <DiseasesContext.Provider value={diseases}>
            <DispatchDContext.Provider value={dispatch}>
                {props.children}
            </DispatchDContext.Provider>
        </DiseasesContext.Provider>
    )
}