import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-primary p-4 max-w-2xl mx-auto rounded-b-lg mb-8">
      <ul className="flex justify-evenly space-x-4 text-white font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
export { Navbar };
