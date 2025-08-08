import { useToastStore } from "../../utils/useToast.ts";
import "../../stylesheets/components/Toast.css";
import type { Toast } from "../../types/utils/utilsTypes.ts";

function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="toast-container">
      {toasts.map((toast: Toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          <span>{toast.message}</span>
          <button type="button" onClick={() => removeToast(toast.id)}>
            &times;
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
