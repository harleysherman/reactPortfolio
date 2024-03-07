import "./Blog.css";
import Posts from "../../posts.json";
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div>
      <h1 className="d-flex justify-content-center m-4">Blog</h1>

      {Posts.map((post) => (
        <>
          <Link to={`/blog/${post.id}`}>
            <h2 key={post.id}>{post.title} </h2>
            <h4>{post.dateCreated}</h4>
            <p>{post.paragraph}</p>
          </Link>
        </>
      ))}
    </div>
  );
}
