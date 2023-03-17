import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IParticipantList } from '../../../shared/types/IParticipant';

export const betaApi = createApi({
    reducerPath: 'betaApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: `${process.env.REACT_APP_SERVER_URL}`
        }
    ),
    endpoints: (build) => ({
        getParticipants: build.query<IParticipantList, number>({
            query: (page) => ({ url: `data?page=${page}&perPage=20` }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems) => {
                currentCache.items.push(...newItems.items);
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        })
    }),
});


export const { useGetParticipantsQuery } = betaApi;
