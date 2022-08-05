import { ChangeEvent, ReactNode } from 'react'

export type CustomInputType = {
  className?: string
  label: string
  onChange(value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
  rightIcon?: ReactNode
  type?: string
  value: string
}
