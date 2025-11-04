export type UserStatus = 'active' | 'inactive'
export type UserGender = 'male' | 'female'

export interface User {
  id: number
  name: string
  email: string
  gender: UserGender
  status: UserStatus
}

export interface UserFormData {
  name: string
  email: string
  gender: UserGender
  status: UserStatus
}

export interface UsersResponse {
  data: User[]
  meta: {
    pagination: {
      total: number
      pages: number
      page: number
      limit: number
    }
  }
}
