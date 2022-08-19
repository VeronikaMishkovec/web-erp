import { MainType } from '../types'

export const userIdSelector = (state: MainType) => state.auth.user.id
