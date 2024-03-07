import { useParams } from "react-router-dom";
import Posts from "../../posts.json";

export default function GetPost() {
  const { postId } = useParams();

  const selectedPost = Posts[parseInt(postId) -1];

  return (
    <>
      <h2>{selectedPost.title}</h2>
      <h4>{selectedPost.dateCreated}</h4>
      <p>{selectedPost.paragraph}</p>
    </>
  );
}
