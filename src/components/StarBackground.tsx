import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // 가벼운 버전 사용

const StarBackground = () => {
    const [init, setInit] = useState(false);

    // 엔진 초기화
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: "#f2f2f2",
                    },
                },
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                        },
                    },
                    color: {
                        value: ["#ff90a1", "#74d3ff", "#ca87e7", "#FFF9C4"],
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: { min: 0.3, max: 0.8 },
                        animation: {
                            enable: true,
                            speed: 1,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 2, max: 4 },
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                    },
                    modes: {
                        bubble: {
                            size: 6,
                            distance: 200,
                            duration: 2,
                            opacity: 1,
                        },
                    },
                },
                detectRetina: true,
            }}
            className="fixed inset-0 -z-10"
        />
    );
};

export default StarBackground;
