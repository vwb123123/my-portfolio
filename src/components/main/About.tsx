import { twMerge } from "tailwind-merge";
import TypeIt from "typeit-react";
import {
    FaBirthdayCake,
    FaGithub,
    FaMapMarkerAlt,
    FaUser,
} from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { Link } from "react-router";

function About() {
    return (
        <section id={"about"} className={twMerge(["py-25"])}>
            <div className={twMerge(["leading-[1.5]", "mb-25", "text-center"])}>
                <div className={twMerge(["text-4xl", "font-medium", "pb-10"])}>
                    <TypeIt
                        options={{
                            speed: 60,
                            waitUntilVisible: true,
                            cursorChar: "_",
                        }}
                    >
                        "아름다움을 디자인하던 감각으로, 이제는 사용자의 경험을
                        코딩합니다."
                    </TypeIt>
                </div>
                <p
                    className={twMerge(
                        ["text-xl", "pb-5"],
                        ["font-light", "leading-8"],
                    )}
                >
                    안녕하세요,{" "}
                    <strong>일상의 가치를 연결하는 개발자 이서연</strong>
                    입니다.
                    <br /> 뷰티디자인 전공의 미적 감각과 프론트엔드 기술을
                    결합하여, 최상의 UX를 구현합니다.
                    <br /> 단순한 구현을 넘어 사용자의 사소한 불편함까지
                    캐치하며,
                    <br /> 팀과 함께 더 나은 내일을 만들어가고 싶습니다.
                </p>
            </div>
            <div
                className={twMerge(
                    ["bg-white", "shadow-xl", "pt-10"],
                    ["pb-10", "w-[1160px]", "mx-auto", "rounded-lg"],
                )}
            >
                <h2
                    className={twMerge(
                        ["mb-14", "text-center"],
                        ["font-bold", "text-4xl"],
                    )}
                >
                    ABOUT ME
                </h2>
                <div className={twMerge(["flex", "text-xl"])}>
                    <div
                        className={twMerge(
                            ["flex", "justify-between"],
                            ["flex-wrap", "items-center"],
                        )}
                    >
                        <div className={"w-1/3 pb-10 pl-10"}>
                            <div className={"flex gap-5"}>
                                <FaUser className={"w-[32px] h-[32px]"} />
                                <div className={"justify-center"}>
                                    <p>이서연</p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-1/3 pb-10 pl-10"}>
                            <div className={"flex gap-5"}>
                                <FaBirthdayCake
                                    className={"w-[32px] h-[32px]"}
                                />
                                <div className={"justify-center"}>
                                    <p>99.03.22</p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-1/3 pb-10 pl-10"}>
                            <div className={"flex gap-5"}>
                                <FaMapMarkerAlt
                                    className={"w-[32px] h-[32px]"}
                                />
                                <div className={"justify-center"}>
                                    <p>경기도 시흥시</p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-1/3 pb-10 pl-10"}>
                            <div className={"flex gap-5"}>
                                <IoPhonePortrait
                                    className={"w-[32px] h-[32px]"}
                                />
                                <div className={"justify-center"}>
                                    <p>010-4947-1449</p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-1/3 pb-10 pl-10"}>
                            <div className={"flex gap-5"}>
                                <MdAttachEmail
                                    className={"w-[32px] h-[32px]"}
                                />
                                <div className={"justify-center"}>
                                    <p>vwb123123@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-1/3 pb-10 pl-10"}>
                            <div className={"flex gap-5"}>
                                <IoMdSchool className={"w-[32px] h-[32px]"} />
                                <div className={"justify-center"}>
                                    <p>신안산대학교 (뷰티디자인과)</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={twMerge(
                                ["w-full", "pb-10", "flex"],
                                ["items-center", "justify-center"],
                            )}
                        >
                            <div
                                className={twMerge(
                                    ["flex", "gap-3", "py-2", "px-5"],
                                    ["bg-pink-100", "rounded-xl"],
                                    ["hover:scale-105", "transition-all"],
                                    ["duration-200", "items-center"],
                                )}
                            >
                                <FaGithub className={"w-[32px] h-[32px]"} />
                                <div>
                                    <Link to={"https://github.com/vwb123123"}>
                                        <p className={"hover:underline"}>Git</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;
