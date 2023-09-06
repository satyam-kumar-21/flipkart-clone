
import * as actionType from '../constants/productConstant';


export const getProductsReducer = (state = {products : []}, action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_SUCCESS:
            return {products : action.payload};
        case actionType.GET_PRODUCT_FAIL:
            return {error : action.payload};
        default: 
        return state;
    }
}

// export const getProductsDetailsReducer = (state = {loading: false, products : {}}, action) => {
//     switch(action.type){
//         case actionType.GET_PRODUCT_DETAILS_REQUEST:
//             return{loading : true};
//         case actionType.GET_PRODUCT_DETAILS_SUCCESS:
//             return {loading: false, product : action.payload};
//         case actionType.GET_PRODUCT_DETAILS_FAIL:
//             return {loading: false, error : action.payload};
//         case actionType.GET_PRODUCT_DETAILS_RESET:
//             return {product : {}};
//         default: 
//         return state;
//     }
// }


export const getProductsDetailsReducer = (state = { loading: false, product: {}, error: null }, action) => {
    switch (action.type) {
      case actionType.GET_PRODUCT_DETAILS_REQUEST:
        return { ...state, loading: true, error: null };
      case actionType.GET_PRODUCT_DETAILS_SUCCESS:
        return { ...state, loading: false, product: action.payload, error: null };
      case actionType.GET_PRODUCT_DETAILS_FAIL:
        return { ...state, loading: false, product: {}, error: action.payload };
      case actionType.GET_PRODUCT_DETAILS_RESET:
        return { ...state, loading: false, product: {}, error: null };
      default:
        return state;
    }
  };
  
  
  
  
  
  






  
  
  
  
  