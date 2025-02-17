"use client";

import { useEffect, useState } from "react";

export default function Toast({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    visible && (
      <div
        className={`fixed bottom-5 right-5 px-4 py-2 rounded-lg shadow-lg text-black text-sm transition-transform transform ${
          type === "success" ? "bg-accent" : "bg-red-500"
        }`}
      >
        {message}
        <button
          className="ml-4 text-black font-bold"
          onClick={() => setVisible(false)}
        >
          ✖
        </button>
      </div>
    )
  );
}
