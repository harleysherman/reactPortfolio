import { useParams } from "react-router-dom";
import Posts from "../../posts.json";

export default function GetPost() {
  const { postId } = useParams();

  const selectedPost = Posts[parseInt(postId) -1];

  return (
    <div className="m-4">
      <h2>{selectedPost.title}</h2>
      <h5>{selectedPost.dateCreated}</h5>
      <p>{selectedPost.paragraph}</p>
    </div>
  );
}
