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
            <header className="bg-transparent border-b-violet-700 p-1">
                <nav className="flex justify-between">
                    <Link to="/" className="text-xl font-bold">🔆 suraj</Link>
                    <div className="hidden lg:flex items-center">
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
                    <Link to="/" className="px-4 hover:font-bold">Home</Link>
                    <Link to="/about" className="px-4 hover:font-bold">About</Link>
                    <Link to="/projects" className="px-4 hover:font-bold">Projects</Link>
                    <Link to="/contact" className="px-4 hover:font-bold">Contact</Link>
                </div>
            }
        </>
    );
};

export default Header;
