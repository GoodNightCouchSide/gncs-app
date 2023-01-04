export interface ApiError {
  message: string
}

export interface ApiErrorResponse {
  data: ApiError[]
  status: number
}
