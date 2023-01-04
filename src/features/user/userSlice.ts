import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/lib/rdx/store'
import { UserState, UserToken } from '@/types/UserTypes'

export interface UserLoginPayload {
  name: string
}

const initialState: UserState = {
  loading: false,
  success: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, { payload }: PayloadAction<UserToken>) => {
      state.userToken = payload
    }
  }
})

export const { setCredentials } = userSlice.actions

export const selectUser = (state: RootState): UserState => state.user

export default userSlice.reducer
