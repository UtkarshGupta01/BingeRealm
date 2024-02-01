import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

const bingeStore = configureStore({
  reducer: {
    home: homeSlice,

  }
})


export default bingeStore;