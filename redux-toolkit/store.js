// step 2: create a redux store
import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userData";

export default configureStore({
  reducer: {
    userData: userDataReducer
  }
});

