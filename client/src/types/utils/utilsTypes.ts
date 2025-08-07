export interface AdminRouteProps {
  children: React.ReactNode;
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
}

export interface ToastMessage {
  id: number;
  message: string;
  type: "success" | "error";
}

export interface ToastState {
  toasts: ToastMessage[];
  addToast: (message: string, type?: "success" | "error") => void;
  removeToast: (id: number) => void;
}
