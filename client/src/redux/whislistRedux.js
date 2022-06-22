import {createSlice} from "@reduxjs/toolkit";

const whislistSlice = createSlice({
    name: "whislist",
    initialState: {
        userId: '',
        products: [],
        quantity: 0,
    },
    reducers: {
        addWhislistProduct: (state, action) => {

            const isExist = state.products.find((product) => product._id === action.payload._id)

            if (!isExist) {
                state.quantity += 1;
                state.products.push(action.payload);
            }
        },
        removeWhislistProduct: (state, action) => {
            state.products = state.products.filter((x) => x._id !== action.payload._id)
            state.quantity -= 1;
        },
        cleanWhislist: (state) => {
            state.products = [];
            state.quantity = 0;
        },
        createWhislistStart: () => {
        },
        createWhislistSuccess: () => {
        },
        createWhislistFailure: () => {
        },

    },
});

export const {addWhislistProduct, removeWhislistProduct, cleanWhislist, createWhislistFailure, createWhislistSuccess, createWhislistStart} = whislistSlice.actions;
export default whislistSlice.reducer;
