import DevPhoto from "../../Assets/Sherman-Harley-SelfPortrait.jpg";

// is homepage
export default function About() {
  return (
    <div>
      {/* <a href={ DevPhoto }>Developer Photo</a> */}
      <img src={ DevPhoto } alt="Photo of Harley"></img>
      <h1>About Me</h1>
      <p>
        Full Stack Web Developer with a background in graphic design and a tenacity to solve tough problems. Currently seeking employment in Web Development.  Detail-oriented with a strong diligence in every project, even the smallest details. Work great under a tight deadline. 
      </p>
    </div>
  );
}
