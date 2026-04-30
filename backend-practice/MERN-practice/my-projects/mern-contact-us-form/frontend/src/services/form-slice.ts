import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formSlice = createApi({
    reducerPath: "formApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
    }),
    endpoints: (builder) => ({
        createForm: builder.mutation({
            query: (newForm) => ({
                url: "form",
                method: "POST",
                body: newForm,
            }),
        }),
    }),
});

// self generated hooks for components to use to call the endpoints
export const { useCreateFormMutation } = formSlice;


