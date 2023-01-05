/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { UserLoginRequest } from '@/types/AuthTypes'
import { UserToken } from '@/types/UserTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auth/'
  }),
  reducerPath: 'authApi',
  endpoints: (builder) => ({
    loginUser: builder.mutation<UserToken, UserLoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials
      })
    }),
    protected: builder.mutation({
      query: () => 'protected'
    })
  })
})

export const { useLoginUserMutation } = authApi
