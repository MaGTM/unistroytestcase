import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INewParticipant } from '../../../../shared/types/IParticipant';

// Define a type for the slice state
interface ProfileState {
    name: string | null,
    email: string | null
}

// Define the initial state using that type
const initialState: ProfileState = {
    email: null,
    name: null
};

export const profileSlice = createSlice({
    name: 'profile',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<INewParticipant>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        removeData: (state) => {
            state.name = null;
            state.email = null;
        }
    },
});

export const { setData, removeData } = profileSlice.actions;

export default profileSlice.reducer;
