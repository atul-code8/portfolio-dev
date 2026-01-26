import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-primary p-4 max-w-2xl mx-auto rounded-b-lg mb-8">
      <ul className="flex justify-evenly space-x-4 text-white font-semibold">
        <li>
          <Link to="/" className="relative">
            Home
          </Link>
          <motion.div
            className="bg-secondary block h-1"
            initial={{ width: 0 }}
            animate={{ width: location.pathname === "/" ? "100%" : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </li>
        <li>
          <Link to="/about" className="relative">
            About Me
          </Link>
          <motion.div
            className="bg-secondary block h-1"
            initial={{ width: 0 }}
            animate={{ width: location.pathname === "/about" ? "100%" : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </li>
        <li>
          <Link to="/projects" className="relative">
            Projects
          </Link>
          <motion.div
            className="bg-secondary block h-1"
            initial={{ width: 0 }}
            animate={{ width: location.pathname === "/projects" ? "100%" : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </li>
      </ul>
    </nav>
  );
}
export { Navbar };
