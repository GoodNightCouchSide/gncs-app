/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { BasicEvent } from '../types/EventTypes'

export const eventsApi = createApi({
  reducerPath: 'eventListApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getEvents: builder.query<BasicEvent[], void>({
      query: () => '/events'
    })
  })
})

export const { useGetEventsQuery } = eventsApi
