import { ChangeEvent } from 'react'

export type LoginFormType = {
  buttonLabel: string
  email: string
  linkLabel: string
  linkRoute: string
  onChangeEmail(val: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
  onChangePassword(
    val: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void
  onClickAuth(...args: any): void
  password: string
  title: string
}
