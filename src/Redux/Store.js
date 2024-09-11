import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Slice'

const Store = configureStore({
    reducer: {
        category: categoryReducer
    }
})

export default Store;