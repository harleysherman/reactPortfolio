import Card from "./Card";
import furCompanion from '../../Assets/furCompanion.png';
import employeeTracker from '../../Assets/employeeTracker.gif';
import techBlog from '../../Assets/techBlog.png';
import socialNetworkAPI from '../../Assets/socialNetworkAPI.gif';
import weatherAPI from '../../Assets/weatherAPI.png';
import workDayStarter from '../../Assets/workDayStarter.png';
import './Portfolio.css';

function Portfolio() {
  const project = [
    {
      id: 1,
      name: "FurCompanion",
      imageURL: furCompanion,
      deployedURL: "https://harleysherman.github.io/fur-companion-pilot/",
      githubURL: "https://github.com/harleysherman/fur-companion-pilot",
    },
    {
      id: 2,
      name: "TechBlog",
      imageURL: techBlog,
      deployedURL: "https://mighty-shelf-93751-8304233a0599.herokuapp.com",
      githubURL: "https://github.com/harleysherman/techBlog",
    },
    {
      id: 3,
      name: "EmployeeTracker",
      imageURL: employeeTracker,
      deployedURL:
        "https://drive.google.com/file/d/1FX9_ctLQVc7LxgwdFC8XcpXLMlmiaVue/view",
      githubURL: "https://github.com/harleysherman/employeeTracker",
    },
    {
      id: 4,
      name: "SocialNetworkAPI",
      imageURL: socialNetworkAPI,
      deployedURL:
        "https://drive.google.com/file/d/17T2H6v49b6ak8QSqHOo-EZ_3_c5uuGCR/view",
      githubURL: "https://github.com/harleysherman/socialNetworkAPI",
    },
    {
      id: 5,
      name: "WeatherAPI",
      imageURL: weatherAPI,
      deployedURL: "https://harleysherman.github.io/weatherAPI/",
      githubURL: "https://github.com/harleysherman/weatherAPI",
    },
    {
      id: 6,
      name: "WorkDayStarter",
      imageURL: workDayStarter,
      deployedURL: "https://harleysherman.github.io/workDayStarter/",
      githubURL: "https://github.com/harleysherman/workDayStarter",
    },
  ];

  return (
    <section className="row">
      {project.map((element) => (
        <li className="projectLi col-md-6 col-sm-12 p-2" key={element.id}>
          <Card project={element} />
        </li>
      ))}
    </section>
  );
}

export default Portfolio;
