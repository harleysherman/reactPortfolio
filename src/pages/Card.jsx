export default function Card(props) {
  return (
    <div className="card" key={props.id}>
      <img className="card-img-top" src={props.imageURL} alt="Project Image" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
      <div className="card-body">
        <a href={props.githubURL} className="card-link">
          GitHub
        </a>
        <a href={props.deployedURL} className="card-link">
          Deployed
        </a>
      </div>
    </div>
  );
}
