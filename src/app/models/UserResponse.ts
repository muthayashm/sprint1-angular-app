interface UserResponse {
  email: string;
  fullName?: string
  mobileNumber?: number
  address?: string
  city?: string
  state?: string
  country?: string
  zipCode?: number
  lastLoginOn: Date,
}

export interface UResponse {
  user: UserResponse[];
}