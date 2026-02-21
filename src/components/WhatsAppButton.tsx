import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          href={`https://wa.me/573176800661?text=${encodeURIComponent(t("whatsapp_button.message"))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,49%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform wa-pulse"
          aria-label={t("whatsapp_button.aria_label")}
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16.004 2.667c-7.36 0-13.337 5.977-13.337 13.337 0 2.353.613 4.653 1.78 6.683l-1.88 6.86 7.027-1.843a13.28 13.28 0 006.41 1.637c7.36 0 13.337-5.977 13.337-13.337S23.364 2.667 16.004 2.667zm0 24.44a11.06 11.06 0 01-5.64-1.543l-.404-.24-4.193 1.1 1.12-4.09-.263-.42a11.03 11.03 0 01-1.69-5.917c0-6.107 4.97-11.077 11.077-11.077 6.107 0 11.077 4.97 11.077 11.077-.007 6.107-4.977 11.11-11.084 11.11zm6.073-8.297c-.333-.167-1.97-.97-2.277-1.083-.307-.11-.53-.167-.753.167s-.863 1.083-1.06 1.307c-.193.223-.39.25-.723.083-.333-.167-1.407-.52-2.68-1.653-.99-.883-1.66-1.973-1.853-2.307-.193-.333-.02-.513.147-.68.15-.15.333-.39.5-.583.167-.193.223-.333.333-.557.11-.223.057-.417-.027-.583-.083-.167-.753-1.817-1.033-2.487-.273-.653-.55-.563-.753-.573l-.643-.01a1.23 1.23 0 00-.893.417c-.307.333-1.17 1.143-1.17 2.787s1.197 3.233 1.363 3.457c.167.223 2.357 3.597 5.71 5.047.797.343 1.42.55 1.903.703.8.253 1.527.217 2.103.133.643-.097 1.97-.807 2.25-1.583.277-.78.277-1.447.193-1.583-.083-.14-.307-.223-.64-.39z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
