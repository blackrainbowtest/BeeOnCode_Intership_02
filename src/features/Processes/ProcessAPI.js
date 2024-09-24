import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4000";

export const getProcesses = createAsyncThunk(
    'get/getProcesses',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);