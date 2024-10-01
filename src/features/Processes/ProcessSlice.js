import { createSlice } from "@reduxjs/toolkit";
import { addProcess, deleteProcessesOrder, getProcesses, updateProcess, updateProcessesOrder } from "./ProcessAPI";

const initialState = {
    data: [],
    current: 0,
    cur_edit: null,
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
        setCurEdit: (state, action) => {
            state.cur_edit = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProcesses.fulfilled, (state, action) => {
                state.data = action.payload.sort((a, b) => a.order - b.order);
            })
            .addCase(addProcess.fulfilled, (state, action) => {
                state.data = [...state.data, action.payload];
            })
            .addCase(updateProcessesOrder.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(deleteProcessesOrder.fulfilled, (state, action) => {
                state.data = state.data.filter(proc => proc.id !== action.payload);
            })
            .addCase(updateProcess.fulfilled, (state, action) => {
                state.data = state.data.map(proc => proc.id === action.payload.id ? action.payload : proc);
            })
    }
});


export default processSlice.reducer;

export const { updateProcessOrder, setCurrent, setCurEdit } = processSlice.actions;
