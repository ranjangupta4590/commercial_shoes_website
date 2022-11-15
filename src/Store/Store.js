import {configureStore} from "@reduxjs/toolkit";

import CartSlice from "./reducer";

const Store =configureStore({
 reducer:{
   cart:CartSlice,
 }
});

export default Store;