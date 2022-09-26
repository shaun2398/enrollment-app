// step 3: create a slice userData.js
import { createSlice } from "@reduxjs/toolkit";
import { initialValues } from "../utils/initialValues";

export const userDataSlice = createSlice({
  name: "userData",
  //   define a state
  initialState: {
    values: {initialValues},
  },
  //   define a reducer and action
  reducers: {
    addValues: (state, action) => {
      state.values = action.payload;
    },
    resetValues: (state) => {
      state.values = initialValues;
    },
  },
});

// export action so that components can modify the state
export const { addValues, resetValues } = userDataSlice.actions;

// export reducers to store
export default userDataSlice.reducer;
