export interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  address: string;
  addressBis: string;
  city: string;
  postcode: string;
  country: string;
  gender: string;
  isAdmin: boolean;
  avatarUrl: string | null;
}

export interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  birthdate: string;
  address: string;
  address_bis: string;
  city: string;
  postcode: string;
  country: string;
}

export interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  birthdate?: string;
  address?: string;
  city?: string;
  postcode?: string;
  country?: string;
}

export interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
  data?: string;
}
