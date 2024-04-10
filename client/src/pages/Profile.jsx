import profileContent from "../components/Content/profileContent";
import {useQuery} from '@apollo/client'
import { QUERY_PROFILE, QUERY_ME } from "../utils/queries";
import { Navigate, useParams } from "react-router-dom";
import Authentication from '../utils/auth';
import AchievementForm from "../components/form/postForm";

export default function Profile() {
    const { username: userParam } = useParams();
  const { loading, data, error } = useQuery(userParam ? QUERY_PROFILE : QUERY_ME, {
    variables: { username: userParam},
  });
  
console.log(userParam);


  const profile = data?.me || data?.user || {};

  if (Authentication.loggedIn() && Authentication.getProfile().data.username === userParam){
    return <Navigate to="/me" />;
  }
  console.log(profile);
  if (loading) return <p>Loading...</p>;

  if (error) return console.log(error);
  return (
    
    <div className="full-viewport">
      <h3 className="profile-username">{profile.username}</h3>
      {profileContent(profile)}
      <div className="achievementPost" ><AchievementForm /></div>
    </div>
  );
}