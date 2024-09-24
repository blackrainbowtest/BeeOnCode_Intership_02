import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4000";

export const getProcesses = createAsyncThunk(
    'get/getProcesses',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/Processes`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const addProcess = createAsyncThunk(
    'post/addProcess',
    async (process, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${url}/Processes`, process);
            console.log(response.data)
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const updateProcessOrder = createAsyncThunk(
    'put/updateProcessOrder',
    async (processes, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${url}/Processes`, processes);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
