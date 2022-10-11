import axios from 'axios';

export const listProducts = (keyword = '', pageNumber = '') => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
  
      const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
  
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };
  
  export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/products/${id}`);
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };

  export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_DELETE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      await axios.delete(`/api/products/${id}`, config);
  
      dispatch({
        type: PRODUCT_DELETE_SUCCESS,
      });
      dispatch({ type: ADD_SNACKBAR, payload: 'Product deleted successfully!' });
    } catch (error) {
      dispatch({
        type: PRODUCT_DELETE_FAIL,
        payload:
          error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };

  export const createProduct = () => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(`/api/products/`, {}, config);
  
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      });
      dispatch({ type: ADD_SNACKBAR, payload: 'Product created successfully!' });
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };