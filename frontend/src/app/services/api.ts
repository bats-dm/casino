import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: "/api/",
})

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
})
