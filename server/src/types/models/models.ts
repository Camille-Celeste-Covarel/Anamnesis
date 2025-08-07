import type { Optional } from "sequelize";

export interface ExempleAttributes {
  id: string;
  Exemplebis: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export type ExempleCreationAttributes = Optional<
  ExempleAttributes,
  "id" | "createdAt" | "updatedAt"
>;

export interface UserAttributes {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender?: "Femme" | "Homme" | "Autre";
  birthdate: Date;
  address: string;
  address_bis?: string;
  city: string;
  postcode: string;
  country: string;
  password: string;
  avatar_url?: string;
  is_admin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  reset_token?: string | null;
  reset_token_expiry?: Date | null;
}
export type UserCreationAttributes = Optional<
  UserAttributes,
  | "id"
  | "avatar_url"
  | "is_admin"
  | "gender"
  | "address_bis"
  | "createdAt"
  | "updatedAt"
>;
