import PDF from "../../Assets/HarleyShermanResume.pdf";
import './Resume.css';

export default function Resume() {
  return (
    <div>
      <h2 className="m-2">Resume</h2>
      <p className="p-2">
        Front End Skills:
        <ul className="p-6">
          <li>React</li>
          <li>CSS</li>
          <li>Handlebars</li>
          <li>Bootstrap</li>
          <li>Express</li>
          <li>HTML</li>
        </ul>
      </p>

      <p className="p-2">
        Back End Skills:
        <ul className="p-6">
          <li>MySQL</li>
          <li>MongoDB & Mongoose</li>
          <li>Jest</li>
          <li>JQuery</li>
          <li>Sequelize</li>
          <li>API</li>
        </ul>
      </p>
      <a className="m-2" href={ PDF } target="_blank">Resume Link</a>
    </div>
  );
}
