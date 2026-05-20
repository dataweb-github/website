import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

const Landing = () => {
    return (
        <main className="App grain min-h-screen bg-white text-forest font-sans">
            <Nav />
            <Hero />
            <Marquee />
            <Services />
            <About />
            <Contact />
        </main>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
