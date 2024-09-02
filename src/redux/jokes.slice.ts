import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchJokes } from './jokes.thunk';

interface JokesState {
    jokesList: string[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: JokesState = {
    jokesList: [],
    status: 'idle',
    error: null,
};

const jokesSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJokes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchJokes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.jokesList = action.payload;
            })
            .addCase(fetchJokes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch jokes';
            });
    },
});

export default jokesSlice.reducer;