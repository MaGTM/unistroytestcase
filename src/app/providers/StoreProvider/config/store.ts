import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { betaApi } from 'widgets/Beta/api/betaApi';
import profileReducer from 'widgets/Beta/model/slices/profileSlice';
import { profileApi } from 'pages/ProfilePage/api/profileApi';



export const store = configureStore({
    reducer: {
        profile: profileReducer,
        [betaApi.reducerPath]: betaApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(betaApi.middleware, profileApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsStat;e, users: UsersState}
export type AppDispatch = typeof store.dispatch;
