import { FiCheckCircle, FiInfo, FiAlertCircle } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { toast, ToastContentProps } from "react-toastify";

export type ToastType = "success" | "error" | "warning" | "info";

const getIconByTypeForNewToast = (type: ToastType) => {
  const ICON_TO_COMP = {
    success: FiCheckCircle,
    error: IoClose,
    warning: FiAlertCircle,
    info: FiInfo,
  };
  const Icon = ICON_TO_COMP[type] || FiInfo;

  const bgColors: Record<ToastType, string> = {
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    info: "#b60058",
  };

  return (
    <div className="h-8 w-8 rounded-full flex justify-center items-center shrink-0">
      <div
        className="h-7 w-7 rounded-full flex justify-center items-center text-white"
        style={{ backgroundColor: bgColors[type] || bgColors.info }}
      >
        <Icon size={16} />
      </div>
    </div>
  );
};

const ToastMessage = ({
  data: { title, subtitle, hideIcon = false, type = "info" },
  closeToast,
}: ToastContentProps<{
  title: string;
  subtitle?: string;
  hideIcon?: boolean;
  type?: ToastType;
}>) => {
  return (
    <div className="flex items-center w-full gap-x-3 py-1 px-1">
      {!hideIcon && getIconByTypeForNewToast(type ?? "info")}
      <div className="text-white flex-1 min-w-0 pr-2">
        <div className="font-semibold text-xs sm:text-sm leading-tight text-white">{title}</div>
        {subtitle && <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">{subtitle}</div>}
      </div>
      <button
        type="button"
        onClick={closeToast}
        aria-label="Close notification"
        className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10 shrink-0"
      >
        <IoClose size={18} />
      </button>
    </div>
  );
};

export const showToast = ({
  type = "info",
  title,
  subtitle,
  hideIcon = false,
  autoClose = 3000,
  isLoading = false,
}: {
  type?: ToastType;
  title: string;
  subtitle?: string;
  hideIcon?: boolean;
  autoClose?: number;
  isLoading?: boolean;
}) => {
  toast(ToastMessage, {
    data: {
      type,
      title,
      subtitle,
      hideIcon,
      isLoading,
    },
    autoClose,
    className: "!bg-[#13161B] !text-white !rounded-2xl !px-3.5 !py-2.5 !shadow-xl !border !border-white/10 !min-w-[320px] !max-w-[480px]",
    closeButton: false,
    hideProgressBar: true,
    position: "top-center",
    isLoading,
  });
};
