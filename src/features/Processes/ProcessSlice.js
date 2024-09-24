import { createSlice } from "@reduxjs/toolkit";
import { addProcess, getProcesses, updateProcessesOrder } from "./ProcessAPI";

const initialState = {
    data: [],
    current: 0
};

const processSlice = createSlice({
    name: 'process',
    initialState: initialState,
    reducers: {
        updateProcessOrder: (state, action) => {
            state.data = action.payload;
        },
        setCurrent: (state, action) => {
            state.current = action.payload
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
            .addCase(updateProcessesOrder.fulfilled, (state, action) => {
                state.data = action.payload;
            });
    }
});


export default processSlice.reducer;

export const { updateProcessOrder, setCurrent } = processSlice.actions;
