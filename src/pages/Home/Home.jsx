import HomePhoto from "../../Assets/HomePageBackground.png";
import "./Home.css";

// is homepage
export default function Home() {
  return (
    <section className="row d-flex justify-content-center">
      <div className="col-md-12 col-sm-12 p-4">
        <a
          className="designPortfolio m-1"
          href={"http://harleysherman.com"}
          target="_blank"
        >
          Design &
        </a>
        <a
          className="devPortfolio m-2"
          href={"http://localhost:3000/Portfolio"}
          target="_blank"
        >
          {" "}
          Development
        </a>
      </div>
      <img
        className="imageHome justify-align-center col-md-12 col-sm-12"
        src={HomePhoto}
        alt="Photo of Generative Pattern"
      ></img>
    </section>
  );
}
