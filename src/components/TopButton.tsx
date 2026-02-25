import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

function TopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    className={twMerge(
                        ["fixed", "bottom-10", "right-10", "z-50"],
                        ["w-14", "h-14", "rounded-full"],
                        ["bg-white/60", "backdrop-blur-md"],
                        ["border", "border-[#ff90a1]/30"],
                        ["shadow-lg", "cursor-pointer"],
                        ["flex", "items-center", "justify-center"],
                        ["text-[#ff90a1]", "text-2xl"],
                        ["hover:bg-[#ff90a1]", "hover:text-white"],
                        ["transition-all", "duration-300"],
                    )}
                >
                    ↑
                </motion.button>
            )}
        </AnimatePresence>
    );
}

export default TopButton;
