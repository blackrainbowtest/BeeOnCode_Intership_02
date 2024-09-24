import { createSlice } from "@reduxjs/toolkit";
import { addProcess, getProcesses } from "./ProcessAPI";

const initialState = {
    data: [],
};

const processSlice = createSlice({
    name: 'process',
    initialState: initialState,
    reducers: {
        // changeGender: (state, action) => {
        //     state.gender = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProcesses.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(addProcess.fulfilled, (state, action) => {
                state.data = [...state.data, action.payload];
            })
    }
});

export default processSlice.reducer;

// export const { } = processSlice.actions;