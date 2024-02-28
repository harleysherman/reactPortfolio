import Card from "./Card";
import weatherAPI from "../../Assets/weatherAPI.png";

function Portfolio() {
  const project = [
    {
      id: 1,
      name: "FurCompanion",
      imageURL: weatherAPI,
      deployedURL: "https://harleysherman.github.io/fur-companion-pilot/",
      githubURL: "https://github.com/harleysherman/fur-companion-pilot",
    },
    {
      id: 2,
      name: "EmployeeTracker",
      imageURL: weatherAPI,
      deployedURL:
        "https://drive.google.com/file/d/1FX9_ctLQVc7LxgwdFC8XcpXLMlmiaVue/view",
      githubURL: "https://github.com/harleysherman/employeeTracker",
    },
    {
      id: 3,
      name: "TechBlog",
      imageURL: weatherAPI,
      deployedURL: "https://mighty-shelf-93751-8304233a0599.herokuapp.com",
      githubURL: "https://github.com/harleysherman/techBlog",
    },
    {
      id: 4,
      name: "SocialNetworkAPI",
      imageURL: weatherAPI,
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
      imageURL: weatherAPI,
      deployedURL: "https://harleysherman.github.io/workDayStarter/",
      githubURL: "https://github.com/harleysherman/workDayStarter",
    },
  ];

  return (
    <>
      {project.map((element) => (
        <>
          <Card project={element} />
        </>
      ))}
    </>
  );
}

export default Portfolio;
