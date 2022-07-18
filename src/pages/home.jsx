import Header from "../components/header";
import Banner from "../components/banner";
import Row from "../components/row";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
}
