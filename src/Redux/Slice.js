import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: [],
    reducers: {
        addCategory(state, action) {
            state.push(action.payload);
        },
        removeCategory(state, action) {
            // const index = state.findIndex(item => item.id === action.payload.id);
            // if (index !== -1) {
            //     state.splice(index, 1);
            // }
            return state.filter((item, index) => index !== action.payload)
        },
        removeAllCategory() {
            return [];
        },
        selectOne(state, action) {
            return action.payload;
        }
    }
});

export const { addCategory, removeCategory, removeAllCategory, selectOne } = categorySlice.actions;
export default categorySlice.reducer;
