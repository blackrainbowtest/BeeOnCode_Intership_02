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

export const updateProcessesOrder = createAsyncThunk(
    'put/updateProcessesOrder',
    async (processes, { rejectWithValue }) => {
        try {
            const requests = processes.map(process => {
                return axios.patch(`${url}/Processes/${process.id}`, { order: process.order });
            });
            await Promise.all(requests);
            return processes;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const updateProcess = createAsyncThunk(
    'put/updateProcess',
    async (process, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`${url}/Processes/${process.id}`, process);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const deleteProcessesOrder = createAsyncThunk(
    'delete/deleteProcessesOrder',
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`${url}/Processes/${id}`);
            return id
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
);