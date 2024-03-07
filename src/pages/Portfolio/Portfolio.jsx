import Card from "./Card";
import "./Portfolio.css";
import projectDev from "../../projects";
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="row">
      {projectDev.map((element) => (
        <li className="projectLi col-md-6 col-sm-12 p-2" key={element.id}>
          <Link to={`/project/${element.id}`}>
            <Card project={element} />
          </Link>
        </li>
      ))}
    </section>
  );
}

export default Portfolio;
