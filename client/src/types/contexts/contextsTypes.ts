import type React from "react";

export interface OverlayContextType {
  openOverlay: (hash: string) => void;
  closeOverlay: () => void;
}

export interface User {
  id: number;
  firstName: string;
  isAdmin: boolean;
  avatarUrl: string | null;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export interface OverlayRoute {
  component: React.ReactNode;
  protection: "public" | "protected" | "admin";
}
