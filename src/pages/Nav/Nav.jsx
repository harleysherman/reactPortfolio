import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={
            currentPage === "/Home"
              ? "nav-link active nav-link-custom"
              : "nav-link nav-link-custom"
          }
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={
            currentPage === "/About"
              ? "nav-link active nav-link-custom"
              : "nav-link nav-link-custom"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={
            currentPage === "/Portfolio"
              ? "nav-link active nav-link-custom"
              : "nav-link nav-link-custom"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={
            currentPage === "/Resume"
              ? "nav-link active nav-link-custom"
              : "nav-link nav-link-custom"
          }
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact"
              ? "nav-link active"
              : "nav-link nav-link-custom"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Blog"
          className={
            currentPage === "/Blog"
              ? "nav-link active nav-link-custom"
              : "nav-link nav-link-custom"
          }
        >
          Blog
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
