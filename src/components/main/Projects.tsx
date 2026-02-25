import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Culita from "../../assets/CULITA_IMG.png";
import Portfolio from "../../assets/portfolioIMG.png";
import wetube from "../../assets/WETUBE.png";
import pokemon from "../../assets/poketmon.png";
import coin from "../../assets/coin.png";

interface ProjectType {
    title: string;
    description: string;
    fullDetail: string;
    tags: string[];
    period: string;
    features: string;
    tech: string;
    contribution: string;
    image: string;
    link: string;
    github: string;
}

const projectData: ProjectType[] = [
    {
        title: "CULITA",
        description:
            "뷰티디자인 전공의 감각을 담은 브랜드 커머스 사이트입니다.",
        fullDetail:
            "브랜드 아이덴티티를 시각적으로 전달하기 위해 개발된 커머스 웹입니다. 반응형 디자인을 통해 최적화된 UX를 제공합니다.",
        tags: ["React", "Tailwind", "Framer-Motion"],
        period: "2026.01 ~ 2026.02",
        features: "API 통신, UI/UX 최적화, 애니메이션 구현",
        tech: "Javascript, React, Tailwindcss",
        contribution: "100%",
        image: Culita,
        link: "https://culita-frontend.vercel.app/",
        github: "https://github.com/vwb123123/CULITA-frontend",
    },
    {
        title: "PORTFOLIO",
        description: "파스텔 톤 배경의 인터랙티브 포트폴리오입니다.",
        fullDetail:
            "사용자 경험을 고려한 인터랙티브 포트폴리오입니다. 애니메이션 효과와 실시간 메일 전송 기능을 포함하고 있습니다.",
        tags: ["TypeScript", "EmailJS", "tsparticles"],
        period: "2026.02 ~ 2026.02",
        features: "EmailJS 연동, SEO 최적화, 호버 애니메이션 구현",
        tech: "Typescript, js, Tailwindcss",
        contribution: "100%",
        image: Portfolio,
        link: "#",
        github: "https://github.com/vwb123123/my-portfolio",
    },
    {
        title: "WETUBE",
        description: "Vite와 React 19를 활용한 비디오 스트리밍 플랫폼입니다.",
        fullDetail:
            "사용자 중심의 비디오 공유 경험을 제공하기 위해 개발된 클론 프로젝트입니다. 동영상 업로드, 실시간 댓글, 좋아요 기능 및 관리자 페이지를 통한 회원 관리를 포함하고 있습니다.",
        tags: ["React 19", "Vite", "Zustand", "Tailwind v4"],
        period: "2025.12 ~ 2025.12",
        features:
            "동영상 CRUD, 실시간 댓글 시스템, 관리자 대시보드, 인증 시스템",
        tech: "React, Typescript, Tailwindcss, Axios, Zustand",
        contribution: "100%",
        image: wetube,
        link: "https://lecture-wetube-frontend-blond.vercel.app/",
        github: "https://github.com/vwb123123/lecture-wetube-frontend",
    },
    {
        title: "Pokédex",
        description:
            "PokeAPI와 TanStack Query를 활용한 고성능 포켓몬 도감 플랫폼입니다.",
        fullDetail:
            "사용자에게 몰입감 있는 도감 경험을 제공하기 위해 개발된 프로젝트입니다. Infinite Scroll을 통한 끊김 없는 데이터 로딩, 실시간 검색 필터링, 그리고 복합 API 호출을 통한 다단계 진화 체인 시각화 기능을 포함하고 있습니다.",
        tags: ["React 19", "Vite", "TanStack Query", "Styled-components"],
        period: "2026.02 ~ 2026.02",
        features:
            "무한 스크롤(Infinite Scroll), 실시간 포켓몬 검색, 타입별 동적 테마 적용, 상세 능력치 시각화 및 진화 계통도 추적",
        tech: "React 19, TypeScript, TanStack Query, Styled-components, Axios",
        contribution: "100%",
        image: pokemon,
        link: "https://poketmon-dex-five.vercel.app/",
        github: "https://github.com/vwb123123/poketmon-dex",
    },
    {
        title: "Crypto Tracker",
        description:
            "CoinLore API를 활용하여 전 세계 암호화폐 시세를 실시간으로 추적하는 대시보드입니다.",
        fullDetail:
            "복잡한 금융 데이터를 사용자가 한눈에 파악할 수 있도록 설계된 데이터 트래킹 웹 애플리케이션입니다. 실시간 검색 필터링 로직과 모달 시스템을 통한 상세 데이터 바인딩을 구현하였으며, CSS 모듈을 활용하여 세련된 UI를 적용했습니다.",
        tags: ["React", "TypeScript", "CSS Modules", "REST API"],
        period: "2026.02 ~ 2026.02",
        features:
            "실시간 시세 데이터 페칭, 이름/심볼 기반 검색 필터링, 코인 상세 정보 모달(변동률, 시가총액 등), 로딩 스피너 및 마우스 호버 인터랙션",
        tech: "React, TypeScript, CSS Modules, Fetch API",
        contribution: "100%",
        image: coin,
        link: "https://lecture-coin-tracker.vercel.app/",
        github: "https://github.com/vwb123123/lecture-coin-tracker",
    },
];

function ProjectCard({ project }: { project: ProjectType }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={twMerge([
                "relative",
                "w-full",
                "h-[500px]",
                "cursor-pointer",
            ])}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className={twMerge(["w-full", "h-full", "relative"])}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* --- 카드 앞면 --- */}
                <div
                    className={twMerge(
                        ["absolute", "inset-0", "w-full", "h-full"],
                        ["bg-white", "rounded-2xl"],
                        ["overflow-hidden", "shadow-lg"],
                        ["flex", "flex-col"],
                    )}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div
                        className={twMerge([
                            "aspect-video",
                            "overflow-hidden",
                            "bg-gray-100",
                        ])}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className={twMerge(
                                ["w-full", "h-full"],
                                ["object-cover"],
                            )}
                        />
                    </div>
                    <div
                        className={twMerge(
                            ["p-8", "flex"],
                            ["flex-col", "gap-4"],
                        )}
                    >
                        <div className={twMerge(["flex", "gap-2"])}>
                            {project.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className={twMerge(
                                        ["text-[10px]", "font-bold"],
                                        ["px-2", "py-1"],
                                        ["bg-[#ff90a1]/10"],
                                        ["text-[#ff90a1]"],
                                        ["rounded-md"],
                                    )}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3
                            className={twMerge(
                                ["text-2xl"],
                                ["font-semibold", "text-[#222]"],
                            )}
                        >
                            {project.title}
                        </h3>
                        <p
                            className={twMerge(
                                ["text-gray-500"],
                                ["text-sm", "leading-relaxed"],
                            )}
                        >
                            {project.description}
                        </p>
                        <div
                            className={twMerge(
                                ["mt-auto", "self-end"],
                                ["flex", "items-center", "gap-1"],
                                [
                                    "text-[#ff90a1]",
                                    "text-[11px]",
                                    "font-bold",
                                    "tracking-wider",
                                ],
                            )}
                        >
                            <span>CLICK TO FLIP</span>
                            <span>↺</span>
                        </div>
                    </div>
                </div>

                {/* --- 카드 뒷면 --- */}
                <div
                    className={twMerge(
                        ["absolute", "inset-0", "w-full", "h-full", "p-8"],
                        ["bg-[#545e75]", "text-white"],
                        ["rounded-2xl", "shadow-xl"],
                        ["flex", "flex-col"],
                    )}
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <h3
                        className={twMerge(
                            ["text-xl", "font-bold"],
                            ["mb-4", "border-b", "border-white/20", "pb-2"],
                        )}
                    >
                        Project Info
                    </h3>
                    <p
                        className={twMerge(
                            ["text-[13px]", "leading-relaxed"],
                            ["mb-6", "text-gray-200"],
                        )}
                    >
                        {project.fullDetail}
                    </p>
                    <div
                        className={twMerge(
                            ["flex", "flex-col"],
                            ["gap-3", "text-[13px]"],
                        )}
                    >
                        <div
                            className={twMerge(
                                ["flex", "border-b"],
                                ["border-white/10", "pb-1"],
                            )}
                        >
                            <span
                                className={twMerge(
                                    ["w-20", "font-semibold"],
                                    ["text-gray-300"],
                                )}
                            >
                                기간
                            </span>
                            <span>{project.period}</span>
                        </div>
                        <div
                            className={twMerge(
                                ["flex", "border-b"],
                                ["border-white/10", "pb-1"],
                            )}
                        >
                            <span
                                className={twMerge(
                                    ["w-20", "font-semibold"],
                                    ["text-gray-300"],
                                )}
                            >
                                주요 기능
                            </span>
                            <span className={twMerge(["flex-1"])}>
                                {project.features}
                            </span>
                        </div>
                        <div
                            className={twMerge(
                                ["flex", "border-b"],
                                ["border-white/10", "pb-1"],
                            )}
                        >
                            <span
                                className={twMerge(
                                    ["w-20", "font-semibold"],
                                    ["text-gray-300"],
                                )}
                            >
                                주요 기술
                            </span>
                            <span>{project.tech}</span>
                        </div>
                        <div
                            className={twMerge(
                                ["flex", "border-b"],
                                ["border-white/10", "pb-1"],
                            )}
                        >
                            <span
                                className={twMerge(
                                    ["w-20", "font-semibold"],
                                    ["text-gray-300"],
                                )}
                            >
                                기여도
                            </span>
                            <span>{project.contribution}</span>
                        </div>
                    </div>
                    <div className={twMerge(["mt-auto", "flex", "gap-3"])}>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={twMerge(
                                ["flex-1", "py-3", "text-center", "rounded-lg"],
                                ["bg-white/10", "font-bold", "text-xs"],
                                ["hover:bg-white/20", "transition-all"],
                            )}
                        >
                            GITHUB
                        </a>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={twMerge(
                                ["flex-1", "py-3", "text-center", "rounded-lg"],
                                ["bg-[#ff90a1]", "font-bold", "text-xs"],
                                ["hover:bg-[#ff7b8f]", "transition-all"],
                            )}
                        >
                            VIEW SITE
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function Projects() {
    return (
        <section
            id="projects"
            className={twMerge(
                ["px-10", "py-30", "min-h-screen"],
                ["flex", "flex-col", "items-center"],
            )}
        >
            <h2
                className={twMerge(
                    ["text-4xl", "font-bold", "mb-20"],
                    ["uppercase", "tracking-widest", "text-[#333]"],
                )}
            >
                My Projects
            </h2>

            <div
                className={twMerge(
                    ["grid", "grid-cols-1", "md:grid-cols-2"],
                    ["gap-12", "w-[1160px]", "mx-auto"],
                )}
            >
                {projectData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
