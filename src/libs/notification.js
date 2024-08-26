import { toast } from "react-toastify";

export const showSuccess = (message) => {
  toast.success(message);
};

export const showInfo = (message) => {
  toast.info(message);
};

export const showWarn = (message) => {
  toast.warn(message);
};

export const showError = (message) => {
  toast.error(message);
};
