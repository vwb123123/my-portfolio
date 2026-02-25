import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router";

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
        <header>
            <div
                className={twMerge(
                    ["w-full", "mx-auto", "flex"],
                    ["justify-between", "h-30", "px-40"],
                )}
            >
                <img
                    src="../../src/assets/logo.png"
                    alt="logo"
                    className={twMerge(["w-35", "h-30", "cursor-pointer"])}
                    onClick={() => navigate("/")}
                />

                <nav className={"flex gap-10 items-center px-6"}>
                    {navItems.map((item) => (
                        <span
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className={twMerge(
                                ["hover:[text-shadow:0.5px_0_0_currentColor]"],
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
