import { Link, useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative bg-transparent  h-20 z-10">
        <div className="flex flex-row flex-nowrap justify-between items-center p-4">
          <img
            alt="netflix logo"
            src="/logo.svg"
            className="w-40 h-12 cursor-pointer"
          />
          <div className="flex flex-row justify-between items-center pr-8 py-5">
            <button type="button" className="text-white font-semibold pr-6 ">
              Sign up
            </button>
            <button
              className="bg-[red] py-2 px-4 leading-4 rounded-sm text-base font-semibold text-white"
              type="button"
              onClick={() => {
                navigate(ROUTES.LOGIN);
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
