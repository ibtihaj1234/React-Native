import { createSlice } from '@reduxjs/toolkit'

export const LangSlice = createSlice({
    name: "LANG",
    initialState: {
        Lang: 'eng'
    },
    reducers: {
        Language: (state, action) => {
            state.Lang(action.payload)
        },
    }
})

export const { addTodo } = LangSlice.actions;
export default LangSlice.reducer;