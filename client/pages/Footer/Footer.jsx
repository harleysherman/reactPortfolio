// import { Link } from "react-router-dom"
import "./Footer.css";
import footerIcon from "../../Assets/footerIcon.png";

export default function Footer() {
  return (
    <div className="mt-4 footer d-flex justify-content-center">
      <div className="d-flex">
        <img
          className="footerIcon justify-content-center"
          src={footerIcon}
          alt="Random Cat Pic"
        ></img>
      </div>

      <a
        href="https://www.linkedin.com/in/harley-sherman-a9680b18b/"
        className="m-5 fa fa-linkedin"
      ></a>
      {/* <a
        className="m-4"
        href={"https://www.linkedin.com/in/harley-sherman-a9680b18b/"}
      >
        LinkedIn
      </a> */}
      <a
        href={"https://github.com/harleysherman"}
        className="m-5 fa fa-github"
      ></a>
      <div className="copyright justify-content-center m-3 p-5">&copy;2024</div>
      <div className="d-flex">
        <img
          className="footerIcon justify-content-center"
          src={footerIcon}
          alt="Random Cat Pic"
        ></img>
      </div>
    </div>
  );
}
