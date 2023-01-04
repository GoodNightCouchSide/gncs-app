export interface UserLoginRequest {
  email: string
  password: string
  remember: boolean
}

export interface UserLoginResponse {
  token: string
}
