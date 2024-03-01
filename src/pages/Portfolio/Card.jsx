/* eslint-disable react/prop-types */
export default function Card({ project }) {
  // console.log(props);
  return (
    <div className="card" key={project.id}>
      <img className="card-img-top" src={project.imageURL} alt="Project Image" />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
      </div>
      <div className="card-body">
        <a href={project.githubURL} className="card-link">
          GitHub
        </a>
        <a href={project.deployedURL} className="card-link">
          Deployed
        </a>
      </div>
    </div>
  );
}
