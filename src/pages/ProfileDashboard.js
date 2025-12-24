import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function ProfileDashboard() {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/profile/me")
      .then(res => setProfile(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, []);

  return (
    <div>
      <h2>My Profile</h2>
      <p><b>Username:</b> {profile.username}</p>
      <p><b>Email:</b> {profile.email}</p>
      <p><b>Aadhaar:</b> {profile.aadhaar}</p>
    </div>
  );
}

export default ProfileDashboard;
