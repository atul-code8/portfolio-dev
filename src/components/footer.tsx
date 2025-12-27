import { Link } from "react-router";
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="bg-primary p-4 max-w-7xl mx-auto rounded-t-lg mt-8 text-center text-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <h3 className="font-bold mb-2">Navigate</h3>
          <ul>
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
        </div>

        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <ul>
            <li>
              Email: <a href="mailto:VY5dC@example.com">VY5dC@example.com</a>
            </li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Follow Me</h3>
          <ul>
            <li>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center"
              >
                <GithubLogoIcon size={24} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center"
              >
                <InstagramLogoIcon size={24} />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center"
              >
                <LinkedinLogoIcon size={24} />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; 2025 My Portfolio. All rights reserved.</p>
    </footer>
  );
}
export { Footer };
