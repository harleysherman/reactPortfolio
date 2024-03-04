// import { Link } from "react-router-dom"
import './Footer.css';

export default function Footer() {
    return (
      <div className="d-flex justify-content-center">
        <a className="m-3" href={ "https://www.linkedin.com/in/harley-sherman-a9680b18b/" }>LinkedIn</a>
        <a className="m-3" href={ "https://github.com/harleysherman" }>GitHub</a>
        <a className="m-3" href={ "https://www.harleysherman.com/" }>Portfolio</a>
      </div>
    );
  }