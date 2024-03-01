import PDF from "../../Assets/HarleyShermanResume.pdf";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={ PDF } target="_blank">Resume</a>
      <p>
        Front End Skills:
        <ul>
          <li>React</li>
          <li>CSS</li>
          <li>Handlebars</li>
          <li>Bootstrap</li>
          <li>Express</li>
          <li>HTML</li>
        </ul>
      </p>

      <p>
        Back End Skills:
        <ul>
          <li>MySQL</li>
          <li>MongoDB & Mongoose</li>
          <li>Jest</li>
          <li>JQuery</li>
          <li>Sequelize</li>
          <li>API</li>
        </ul>
      </p>
    </div>
  );
}
