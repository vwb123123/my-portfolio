import { twMerge } from "tailwind-merge";

function Footer() {
    // 현재 연도를 자동으로 가져옵니다.
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className={twMerge(
                ["w-full", "py-12", "px-10"],
                ["flex", "flex-col", "items-center", "justify-center"],
                ["border-t", "border-gray-200"],
                ["bg-white/30", "backdrop-blur-sm"],
            )}
        >
            <div
                className={twMerge(
                    ["w-[1160px]", "flex", "items-center", "justify-center"],
                    ["text-[#888]", "text-sm", "font-light"],
                )}
            >
                {/* 왼쪽: 저작권 문구 */}
                <p className={twMerge(["tracking-wider"])}>
                    © {currentYear} Designed & Developed by{" "}
                    <span className="font-medium text-[#555]">SeoYeon Lee</span>
                </p>
            </div>

            {/* 하단 장식 문구 */}
            <p
                className={twMerge([
                    "mt-6",
                    "text-[10px]",
                    "text-[#ff90a1]",
                    "uppercase",
                    "tracking-[0.5em]",
                ])}
            >
                Focus on Detail, Design for Value
            </p>
        </footer>
    );
}

export default Footer;
