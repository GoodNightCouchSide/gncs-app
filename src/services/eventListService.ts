/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { BasicEvent, GetEventsResponse } from '../types/EventTypes'

export const eventsApi = createApi({
  reducerPath: 'eventListApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/_api/' }),
  endpoints: (builder) => ({
    getEvents: builder.query<BasicEvent[], undefined>({
      query: () => '/events',
      transformResponse: (response: GetEventsResponse): BasicEvent[] => {
        return response.events
      }
    })
  })
})

export const { useGetEventsQuery } = eventsApi
