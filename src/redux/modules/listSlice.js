import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    lists: [],
    isLoading: false,
    error: null,
}

export const __getLists = createAsyncThunk(
    'getLists',
    async (payload, thunkApi) => {
        try {
            const { data } = await axios.get('https://expensive-coal-frog.glitch.me/lists');
            return thunkApi.fulfillWithValue(data);
        }
        catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

const listSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        // getLists(state, action) {
        //     state.lists = action.payload;
        // }
    },
    extraReducers: {
        [__getLists.pending]: (state) => {
            state.isLoading = true;
        },
        [__getLists.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.lists = action.payload;
            state.error = null;
        },
        [__getLists.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

// export const {} = listSlice.actions;
export default listSlice.reducer;