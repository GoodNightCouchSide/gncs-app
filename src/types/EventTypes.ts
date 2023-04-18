export interface BasicEvent {
  id: number
  title: string
  description?: string
  prePayment: number
  boxOffice: number
}

export interface EventFormValues {
  title: string
  description: string
  prePayment: number
  boxOffice: number
}

export interface GetEventsResponse {
  success: boolean
  events: BasicEvent[]
}
