export type RegistrationPayloadType = {
  data: {
    id: string
  }
  message: string
  status: number
}

export type LoginPayloadType = {
  data: {
    id: string
    token: string
  }
}
