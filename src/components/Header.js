import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [show, setShow] = useState(false);

    const display = () => {
        setTimeout(() => {
            setShow(!show);
        }, 200);
    }

    return (
        <>
            <header className="bg-transparent p-1 px-4 top-0 left-0">
                <nav className="flex justify-between">
                    <Link to="/"><img className="text-xl font-bold" src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=800&duration=5000&pause=0&color=000000&vCenter=true&width=435&height=59&lines=%F0%9F%94%86+Suraj+Khot+%7C+Software+Developer" alt="Typing SVG" /></Link>

                    <div className="hidden lg:flex items-center px-4 text-xl">
                        <Link to="/" className="px-4 hover:font-bold">Home</Link>
                        <Link to="/about" className="px-4 hover:font-bold">About</Link>
                        <Link to="/projects" className="px-4 hover:font-bold">Projects</Link>
                        <Link to="/contact" className="px-4 hover:font-bold">Contact</Link>
                    </div>

                    {/* menue in small screen */}
                    <div className="lg:hidden flex items-center">
                        <button className="text-black" onClick={display}>
                            <svg
                                className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            {/* meue in small screen */}
            {
                show &&
                <div className="flex flex-col justify-center items-end">
                    <Link onClick={display} to="/" className="px-4 hover:font-bold">Home</Link>
                    <Link onClick={display} to="/about" className="px-4 hover:font-bold">About</Link>
                    <Link onClick={display} to="/projects" className="px-4 hover:font-bold">Projects</Link>
                    <Link onClick={display} to="/contact" className="px-4 hover:font-bold">Contact</Link>
                </div>
            }
        </>
    );
};

export default Header;
