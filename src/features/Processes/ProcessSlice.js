import { createSlice } from "@reduxjs/toolkit";
import { addProcess, getProcesses } from "./ProcessAPI";

const initialState = {
    data: [],
};

const processSlice = createSlice({
    name: 'process',
    initialState: initialState,
    reducers: {
        updateProcessOrder: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProcesses.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(addProcess.fulfilled, (state, action) => {
                state.data = [...state.data, action.payload];
            })
            .addCase(updateProcessOrder.fulfilled, (state, action) => {
                state.data = action.payload;
            });
    }
});

export const { updateProcessOrder } = processSlice.actions;

export default processSlice.reducer;