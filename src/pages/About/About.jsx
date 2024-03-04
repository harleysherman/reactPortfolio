import DevPhoto from "../../Assets/Sherman-Harley-SelfPortrait.jpg";
import "./About.css";

// is homepage
export default function About() {
  return (
    <section className="row">
      <img className="imageDev col-md-4 col-sm-12" src={DevPhoto} alt="Photo of Harley"></img>
      <div className="col-md-8 col-sm-12 p-2">
        <h2>About Me</h2>
        <p>
          Full Stack Web Developer with a background in graphic design and a
          tenacity to solve tough problems. Currently seeking employment in Web
          Development. Detail-oriented with a strong diligence in every project,
          even the smallest details. Work great under a tight deadline.
        </p>
      </div>
    </section>
  );
}
