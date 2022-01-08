import { profileConstants } from "../constants";

const initState = {
    products: [],
    loading: false,
    // pageRequest: false,
};

const DateReducer = (state = initState, action) => {
    switch (action.type) {
        case profileConstants.DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case profileConstants.DATA_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };

        case profileConstants.DATA_FAILURE:
            return {
                ...state,
                products: [],
                loading: false,
            };
        case profileConstants.REMOVE_ALL_PRODUCTS:
            return {
                ...state,
                products: [],
                loading: false,
            };
        default:
            return state;
    }
};
export default DateReducer

// export const singleProductView = (state = initState, action) => {
//     switch (action.type) {
//         case singleProdConstants.SINGLE_DATA_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//             };
//         case singleProdConstants.SINGLE_DATA_SUCCESS:
//             return {
//                 ...state,
//                 products: action.payload,
//                 loading: false,
//             };

//         case singleProdConstants.SINGLE_DATA_FAILURE:
//             return {
//                 ...state,
//                 products: [],
//                 loading: false,
//             };
//         case singleProdConstants.REMOVE_SINGLE_DATA:
//             return {
//                 ...state,
//                 products: [],
//                 loading: false,
//             };
//         default:
//             return state;
//     }
// };
