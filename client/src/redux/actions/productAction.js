import axios from "axios";
import * as actionTypes from '../constants/productConstant';

const URL = 'http://localhost:5005'

export const getProducts = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/products`);
        dispatch({type: actionTypes.GET_PRODUCT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: actionTypes.GET_PRODUCT_FAIL, payload: error.message });
    }
}