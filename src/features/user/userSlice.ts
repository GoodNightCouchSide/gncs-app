import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/lib/rdx/store'

interface UserState {
  name?: string
  isLogin: boolean
}

export interface UserLoginPayload {
  name: string
}

const initialState: UserState = {
  isLogin: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserLoginPayload>) => {
      return { ...state, name: action.payload.name }
    }
  }
})

export const { loginUser } = userSlice.actions

export const selectUser = (state: RootState): UserState => state.user

export default userSlice.reducer
