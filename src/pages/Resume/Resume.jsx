import PDF from "../../Assets/HarleyShermanResume.pdf";
import "./Resume.css";
import sideIcon from "../../Assets/sideIcon.png";

export default function Resume() {
  return (
    <div className="d-flex">
      <div className="me-auto align-items-start flex-column">
        <h2 className="m-4">Resume</h2>
        <section className="skills m-4">
          Front End Skills:
          <ul className="p-6">
            <li>React</li>
            <li>CSS</li>
            <li>Handlebars</li>
            <li>Bootstrap</li>
            <li>Express</li>
            <li>HTML</li>
          </ul>
        </section>

        <section className="skills m-4">
          Back End Skills:
          <ul className="p-6">
            <li>MySQL</li>
            <li>MongoDB & Mongoose</li>
            <li>Jest</li>
            <li>JQuery</li>
            <li>Sequelize</li>
            <li>API</li>
          </ul>
        </section>
        <a className="skills m-4" href={PDF} target="_blank">
          Resume Link
        </a>
      </div>

      <div className="d-flex align-items-end flex-column">
        <img src={sideIcon} alt="Row of flowers on the side"></img>
      </div>
    </div>
  );
}
