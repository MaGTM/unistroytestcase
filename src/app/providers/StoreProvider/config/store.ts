import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { betaApi } from 'widgets/Beta/api/betaApi';



export const store = configureStore({
    reducer: {
        [betaApi.reducerPath]: betaApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(betaApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsStat;e, users: UsersState}
export type AppDispatch = typeof store.dispatch;
