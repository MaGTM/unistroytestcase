import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IParticipant } from 'shared/types/IParticipant';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: `${process.env.REACT_APP_SERVER_URL}`
        }
    ),
    endpoints: (build) => ({
        getProfile: build.query<IParticipant, string>({
            query: (id) => ({ url: `data/id/${id}` })
        })
    }),
});


export const { useGetProfileQuery } = profileApi;
