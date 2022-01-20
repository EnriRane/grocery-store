import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/VideoComponent.css";
import { getUser } from "../reducers/users";
const VideoComponent = (props) => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <div id="myVideo">
      <video autoPlay muted loop style={{ width: 100 + "%", height: 27 + "%" }}>
        <source src="/videos/groceryVideo.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="content">
        <h1>Knock knock...</h1>
        <h5>
          Are you tired of waiting for minutes and minutes in supermarcets with
          your shopping cart full of food ? Are you tired of spending so much
          time for nothing? Do you have children and can't live them alone at
          home. Let's give it an end ! Order now a list of spendings 50$+ if you
          live in one of 18 Durres districts and all you will have to do is open
          your door ...
        </h5>
        {!user && (
          <button id="myBtn" onClick={() => handleClick()}>
            Register now
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
