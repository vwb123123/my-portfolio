import { twMerge } from "tailwind-merge";
import { type BaseSyntheticEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import message from "../../assets/message.jpg";

function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_48jid8x",
                "template_x61cpkc",
                form.current!,
                "ZSJpik-GmcsxkaXr8",
            )
            .then(
                () => {
                    alert("메시지가 성공적으로 전송되었습니다! :)");
                },
                (error) => {
                    alert("전송에 실패했습니다. 다시 시도해주세요.");
                    console.log(error.text);
                },
            );
    };

    return (
        <section
            id="contact"
            className={twMerge(
                ["py-30", "w-[1160px]", "mx-auto"],
                ["flex", "justify-center", "items-stretch", "gap-16"],
            )}
        >
            {/* 왼쪽 영역 */}
            <div
                className={twMerge(
                    ["w-[450px]", "bg-white", "p-12", "shadow-xl"],
                    ["rounded-sm", "flex", "flex-col"],
                    ["items-center", "text-center"],
                )}
            >
                <h2
                    className={twMerge(
                        ["text-3xl", "font-medium"],
                        ["tracking-widest", "mb-2"],
                    )}
                >
                    CONTACT ✉
                </h2>
                <p className={twMerge(["text-gray-400", "mb-8"])}>
                    Thank you : )
                </p>
                <div
                    className={twMerge(
                        ["w-full", "aspect-square"],
                        ["overflow-hidden", "mb-6"],
                    )}
                >
                    <img
                        src={message}
                        alt="Contact"
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className={twMerge(["text-gray-500", "leading-relaxed"])}>
                    작은 인연도 소중히 생각합니다.
                    <br />
                    함께 성장할 기회를 기다립니다.
                </p>
            </div>

            {/* 오른쪽 영역 */}
            <div
                className={twMerge(
                    ["flex-1", "bg-white/40", "p-12", "rounded-2xl"],
                    ["backdrop-blur-md", "border", "border-white"],
                )}
            >
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className={twMerge(["flex", "flex-col", "gap-6"])}
                >
                    <div className={twMerge(["flex", "flex-col", "gap-2"])}>
                        <label
                            className={twMerge(
                                ["text-sm", "font-semibold"],
                                ["text-gray-600"],
                            )}
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            placeholder={"성함을 입력해주세요."}
                            required
                            className={twMerge(
                                ["w-full", "p-3", "border-b-2"],
                                ["border-gray-300", "bg-transparent"],
                                [
                                    "focus:border-[#ff90a1]",
                                    "outline-none",
                                    "transition-colors",
                                ],
                            )}
                        />
                    </div>

                    <div className={twMerge(["flex", "flex-col", "gap-2"])}>
                        <label
                            className={twMerge([
                                "text-sm",
                                "font-semibold",
                                "text-gray-600",
                            ])}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            className={twMerge(
                                ["w-full", "p-3", "border-b-2"],
                                ["border-gray-300", "bg-transparent"],
                                ["focus:border-[#ff90a1]"],
                                ["outline-none", "transition-colors"],
                            )}
                        />
                    </div>

                    <div className={twMerge(["flex", "flex-col", "gap-2"])}>
                        <label
                            className={twMerge([
                                "text-sm",
                                "font-semibold",
                                "text-gray-600",
                            ])}
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows={5}
                            required
                            className={twMerge(
                                ["w-full", "p-3", "border-b-2"],
                                ["border-gray-300", "bg-transparent"],
                                ["focus:border-[#ff90a1]"],
                                ["outline-none", "resize-none"],
                                ["transition-colors"],
                            )}
                        />
                    </div>

                    <button
                        type="submit"
                        className={twMerge(
                            ["mt-4", "py-4", "bg-[#545e75]"],
                            ["text-white", "font-bold", "tracking-widest"],
                            ["rounded-lg", "hover:bg-[#434c5e]"],
                            ["transition-all", "shadow-lg"],
                        )}
                    >
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
