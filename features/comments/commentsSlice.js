import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

//TASK THREE SET ASYNCTHUNK ACTION CREATOR
export const postComment = createAsyncThunk(
    'comments/postComment',
    async (payload, { dispatch, getState }) => {
        setTimeout(() => {
            const { comments } = getState();
            date={Date ()};
            id=comments.commentsArray.length;
            dispatch({addComment(payload)});
        }, 2000);
    }
);


export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        return response.json();
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: { isLoading: true, errMess: null, commentsArray: [] },
    reducers: {
//TASK THREE ADDED NEW REDUCER
        addComment: (state, action) => {
            if (state.commentsArray.includes(action.payload)) {
                return comments.filter(
                    (comment) => comment !== action.payload
                );
            } else {
                state.commentsArrayments.push(action.payload);
            }
        }
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const { addComment } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;