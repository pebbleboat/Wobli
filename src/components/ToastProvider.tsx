"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** Single app-wide toast host */
export default function ToastProvider() {
  return (
    <ToastContainer
      stacked
      position="top-center"
      hideProgressBar
      closeButton={false}
      className="!z-[10050]"
      toastClassName="!z-[10050] !bg-transparent !p-0 !shadow-none !border-none !min-h-0"
    />
  );
}
