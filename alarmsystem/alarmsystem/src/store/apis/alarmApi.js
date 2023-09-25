import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const alarmApi = createApi({
  reducerPath: 'alarms',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5248/api',
  }),
  endpoints (builder) {
    return {
      fetchAlarmItems: builder.query({
        query: () => {
          return {
            url: '/AlarmItems',
            method: 'GET',
          };
        },
      }),
      fetchEpilepsy: builder.query({
        query: () => {
          return {
            url: '/Epilepsy',
            method: 'GET',
          };
        },
      }),

      fetchEnuresis: builder.query({
        query: () => {
          return {
            url: '/Enuresis',
            method: 'GET',
          };
        },
      }),
      fetchProducts: builder.query({
        query: () => {
          return {
            url: '/Products',
            method: 'GET',
          };
        },
      }),

      fetchCustomer: builder.query({
        query: () => {
          return {
            url: '/Customer',
            method: 'GET',
          };
        },
      }),

      createCustomer: builder.mutation({
        query: (newCustomer) => {
          return {
            url: '/Customer',
            method: 'POST',
            body: newCustomer,
          };
        },
      }),

      deleteCustomer: builder.mutation({
        query: () => {
          return {
            url: `/Customer/{customerNumber}`,
            method: 'DELETE',
          };
        },
      }),

      updateCustomer: builder.mutation({
        query: () => {
          return {
            url: `/Customer/{customerNumber}`,
            method: 'PUT',
           
          };
        },
      }),
    }
  },
});

export const { useFetchEpilepsyQuery, useFetchEnuresisQuery, useFetchAlarmItemsQuery, useFetchProductsQuery, useFetchCustomerQuery, useCreateCustomerMutation, useDeleteCustomerMutation, useUpdateCustomerMutation} = alarmApi;
export { alarmApi };  