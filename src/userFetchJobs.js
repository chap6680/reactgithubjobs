import {useReducer} from 'react';

export default function useFetchJobs(parms, page){
    return {
    jobs: [],
    loading: false,
    error: false,
}
}