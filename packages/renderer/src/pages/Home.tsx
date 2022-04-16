import { Link } from "react-router-dom";
import { ROUTES } from "@src/Routes";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={ROUTES.Page2}>Page 2</Link>
    </div>
  );
}
