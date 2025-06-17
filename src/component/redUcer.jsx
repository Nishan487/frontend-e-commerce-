import React from 'react'
import { useProductContext} from './productcontext'

const reducer = (state,action) => {
    // if(action.type==="SET_LOADING"){
    //     return{
    //         ...state,
    //         isLoading:true,
    //     };
    // }
    // if(action.type==="API_ERROR"){
    //     return{
    //         ...state,
    //         isLoading:false,
    //         isError:true,
    //     }
    // }
    switch(action.type){
        case 'SET_LOADING':
            return {...state, isLoading:true};
          case 'SET_APIDATA':
            return {...state, isLoading:false, products:action.payload};
            
            case 'API_ERROR':
                return {...state, isLoading:false, isError:true};

            }
    
        return{
        state
        }
}

export default reducer;