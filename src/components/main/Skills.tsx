import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const skillData = [
    {
        category: "프론트엔드 개발",
        items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"],
        color: "bg-pink-100 text-pink-700",
    },
    {
        category: "라이브러리 & UI",
        items: [
            "axios",
            "swiper",
            "tiptap",
            "daum-postcode",
            "locomotive-scroll",
            "framer-motion",
            "styled-component",
            "tailwindcss",
        ],
        color: "bg-blue-100 text-blue-700",
    },
    {
        category: "상태관리",
        items: ["react-hook-form", "zustand"],
        color: "bg-purple-100 text-purple-700",
    },
    {
        category: "개발 & 배포 도구",
        items: ["GitHub", "tosspayments", "vercel"],
        color: "bg-green-100 text-green-700",
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className={twMerge(
                ["py-20", "px-10", "min-h-screen"],
                ["flex", "flex-col", "items-center"],
            )}
        >
            <h2
                className={twMerge(
                    ["text-4xl", "font-bold"],
                    ["mb-16", "uppercase"],
                )}
            >
                My Skills
            </h2>

            <div
                className={twMerge(
                    ["grid", "grid-cols-1", "md:grid-cols-2"],
                    ["gap-8", "w-full", "max-w-5xl"],
                )}
            >
                {skillData.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className={twMerge(
                            ["bg-white", "backdrop-blur-md"],
                            ["border", "border-white/20"],
                            ["p-8", "rounded-2xl", "shadow-xl"],
                        )}
                    >
                        <h3
                            className={twMerge(
                                ["text-xl", "font-semibold", "mb-6"],
                                ["border-b", "border-white/10", "pb-2"],
                            )}
                        >
                            {skill.category}
                        </h3>

                        <div
                            className={twMerge(["flex", "flex-wrap", "gap-3"])}
                        >
                            {skill.items.map((item) => (
                                <span
                                    key={item}
                                    className={twMerge(
                                        ["px-4", "py-1.5", "rounded-full"],
                                        ["text-sm", "font-medium"],
                                        [
                                            "transition-transform",
                                            "hover:scale-110",
                                        ],
                                        ["cursor-default"],
                                        [skill.color],
                                    )}
                                >
                                    #{item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
export default Skills;
