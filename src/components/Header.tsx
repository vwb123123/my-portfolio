import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";

function Header() {
    const navigate = useNavigate();

    const navItems = [
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={twMerge(
                ["fixed", "top-0", "left-0", "z-50"],
                ["w-full", "bg-white/80", "backdrop-blur-md"],
            )}
        >
            <div
                className={twMerge(
                    ["w-full", "mx-auto", "flex"],
                    ["justify-between", "h-30", "px-40", "items-center"],
                )}
            >
                <img
                    src={logo}
                    alt={"logo"}
                    className={twMerge(["w-35", "h-30", "cursor-pointer"])}
                    onClick={() => navigate("/")}
                />

                <nav
                    className={twMerge(
                        ["flex", "gap-10"],
                        ["items-center", "px-6"],
                    )}
                >
                    {navItems.map((item) => (
                        <span
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className={twMerge(
                                ["text-[#333]", "font-medium"],
                                ["hover:[text-shadow:0.5px_0_0_currentColor]"],
                                ["hover:text-[#ff90a1]"],
                                ["transition-all", "duration-200"],
                                ["cursor-pointer"],
                            )}
                        >
                            {item.name}
                        </span>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
