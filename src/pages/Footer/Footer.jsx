// import { Link } from "react-router-dom"
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer d-flex justify-content-center">
      <a
        href="https://www.linkedin.com/in/harley-sherman-a9680b18b/"
        className="social-icon si-rounded si-small si-linkedin m-4"
      >
        <i className="icon-linkedin"></i>
      </a>
      {/* <a
        className="m-4"
        href={"https://www.linkedin.com/in/harley-sherman-a9680b18b/"}
      >
        LinkedIn
      </a> */}
      <a className="m-4" href={"https://github.com/harleysherman"}>
        GitHub
      </a>
      <div className="copyright justify-content-center m-4">
        Copyright &copy;2024
      </div>
    </div>
  );
}
