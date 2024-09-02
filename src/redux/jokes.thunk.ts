import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJokes = createAsyncThunk('fetchJokes', async (numberOfJokes: number) => {
    const response = await axios.get(`https://icanhazdadjoke.com/`, { headers: { 'Accept': 'application/json' } });

    return response.data;
});