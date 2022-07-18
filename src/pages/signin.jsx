import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const navigate = useNavigate();

  return (
    <>
      <button type="button" onClick={() => navigate(ROUTES.DASHBOARD)}>
        Go back
      </button>
    </>
  );
}
