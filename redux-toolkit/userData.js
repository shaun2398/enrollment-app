// step 3: create a slice userData.js
import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  //   define a state
  initialState: {
    values: {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
      completeAddress: "",
    },
  },
  //   define a reducer and action
  reducers: {
    addValues: (state, action) => {
      state.values = action.payload;
    },
  },
});

// export action so that components can modify the state
export const { addValues } = userDataSlice.actions;

// export reducers to store
export default userDataSlice.reducer;
