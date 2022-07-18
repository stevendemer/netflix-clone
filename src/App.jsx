import { lazy, Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Loader from "./components/loader";
import "react-loading-skeleton/dist/skeleton.css";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/signin"));
const SignUp = lazy(() => import("./pages/signup"));
const Notfound = lazy(() => import("./pages/not-found"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
