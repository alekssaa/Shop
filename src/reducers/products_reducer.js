import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  } else if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  } else if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true, producst_error: false };
  } else if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products_loading: false,
      producst_error: false,
      products: action.payload,
      products_featured: action.payload.filter((product) => {
        return product.featured === true;
      }),
    };
  } else if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, producst_error: true };
  } else if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  } else if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_error: false,
      single_product_loading: false,
      single_product: action.payload,
    };
  } else if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_error: true,
      single_product_loading: false,
    };
  }
  return state;
};

export default products_reducer;
