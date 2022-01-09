// import axios from "../../config";
import { profileConstants } from "../constants";

export const profileView = (data) => {
    return async dispatch => {
        console.log("action data =>", data)
        dispatch({
            type: profileConstants.DATA_REQUEST,
        });
        dispatch({
            type: profileConstants.DATA_SUCCESS, payload: data
        });
    }
}

// export const productsView = () => {
//     return async (dispatch) => {
//         try {
//             dispatch({
//                 type: profileConstants.DATA_REQUEST,
//             });
//             let res = await axios.get("/products");
//             const { data } = res;
//             dispatch({ type: profileConstants.DATA_SUCCESS, payload: data });
//         } catch (err) {
//             dispatch({ type: profileConstants.DATA_FAILURE });
//         }
//     };
// };

// export const removeAllProducts = () => {
//     return async (dispatch) => {
//         dispatch({ type: profileConstants.REMOVE_ALL_PRODUCTS });
//     };
// };

// export const singleView = (id) => {
//     return async (dispatch) => {
//         try {
//             dispatch({
//                 type: singleprofileConstants.SINGLE_DATA_REQUEST,
//             });
//             let res = await axios.get(`/products/${id}`);
//             const data = res.data;
//             dispatch({
//                 type: singleprofileConstants.SINGLE_DATA_SUCCESS,
//                 payload: data,
//             });
//         } catch (err) {
//             dispatch({ type: singleprofileConstants.SINGLE_DATA_FAILURE });
//         }
//     };
// };
