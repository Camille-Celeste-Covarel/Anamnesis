export interface AdminRouteProps {
  children: React.ReactNode;
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
}

export interface Toast {
  id: number;
  message: string;
  type: "success" | "error";
}

export interface ToastState {
  toasts: Toast[];
  addToast: (message: string, type?: "success" | "error") => void;
  removeToast: (id: number) => void;
}
