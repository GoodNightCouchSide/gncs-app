export enum TokenTypes {
  BEARER = 'bearer'
}

export interface UserToken {
  expires_at: string
  token: string
  type: TokenTypes
}

export interface UserState {
  loading: boolean
  userInfo?: {
    name?: string
  }
  userToken?: UserToken
  error?: {
    message: string
  }
  success: boolean
}
