import { useParams } from "react-router-dom";
import ProfileForm from "./ProfileForm";

const ProfileWrapper = () => {
  const id = useParams();
  return <ProfileForm id={id} />;
};

export default ProfileWrapper;
