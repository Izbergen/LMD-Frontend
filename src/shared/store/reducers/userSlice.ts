import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IUserState {
    id: string | null,
    username: string | null,
    isAdmin: boolean,
}

const initialState: IUserState = {
    id: null,
    username: null,
    isAdmin: false,
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserState>) => {
            state.id = action.payload.id
            state.username = action.payload.username
            state.isAdmin = action.payload.isAdmin
        }
    }
});

export const {
    setUser,
} = userSlice.actions;

export default userSlice.reducer;