import Header from "../components/Header.tsx";
import StarBackground from "../components/StarBackground.tsx";
import About from "../components/main/About.tsx";
import Skills from "../components/main/Skills.tsx";
import Projects from "../components/main/Projects.tsx";
import Contact from "../components/main/Contact.tsx";
import Footer from "../components/Footer.tsx";
import TopButton from "../components/TopButton.tsx";

function Home() {
    return (
        <div className={"relative min-h-screen"}>
            <StarBackground />
            <div className={"relative z-10"}>
                <Header />
            </div>
            <main>
                <div className={"w-[90dvw] mx-auto"}>
                    <div>
                        <About />
                    </div>
                    <div>
                        <Skills />
                    </div>
                    <div>
                        <Projects />
                    </div>
                    <div>
                        <Contact />
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
                <TopButton />
            </footer>
        </div>
    );
}
export default Home;
