import { Outlet } from "react-router-dom";
import Headrs from "../components/Header";
export default function Root() {
  return (
    <div className="container mx-auto px-20">
      <Headrs />
      <Outlet />
    </div>
  );
}
