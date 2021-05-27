import React, {createContext} from 'react';
import {}from '../hooks/useLocalStorageReducer';
import diseaseReducer from '../reducers/disease.reducer';

const defaultDiseaseState = [
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
export const DiseaseContext = createContext();
export const DispatchDContext= createContext();

export const DiseaseProvider = memo()