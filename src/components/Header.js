import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-transparent border-b-violet-700 p-1">
            <nav className="flex justify-between">
                <Link to="/" className="text-xl">My Portfolio</Link>
                <div className="hidden lg:flex items-center">
                    <Link to="/" className="px-4">Home</Link>
                    <Link to="/about" className="px-4">About</Link>
                    <Link to="/projects" className="px-4">Projects</Link>
                    <Link to="/contact" className="px-4">Contact</Link>
                </div>

                {/* menue in small screen */}
                <div className="lg:hidden flex items-center">
                    <button className="text-black">
                        <svg
                            className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
