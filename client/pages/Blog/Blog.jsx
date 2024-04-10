/* eslint-disable react/jsx-key */
import "./Blog.css";
import Posts from "../../posts.json";
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div>
      <h2 className="d-flex justify-content-center m-3">Blog</h2>

      {Posts.map((post) => (
        <div className="m-3">
          <Link className="post m-4" to={`/blog/${post.id}`}>
            <h2 key={post.id}>{post.title} </h2>
            <h5>{post.dateCreated}</h5>
            <p>{post.paragraph}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
