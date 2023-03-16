import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const betaApi = createApi({
    reducerPath: 'betaApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: `${process.env.REACT_APP_SERVER_URL}`
        }
    ),
    endpoints: (build) => ({
        getParticipants: build.query<unknown, unknown>({
            query: (page) => ({ url: `data?page=${page}&perPage=20` }),
        })
    }),
});


export const { useGetParticipantsQuery } = betaApi;
