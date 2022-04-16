import { Link } from "react-router-dom";
import { ROUTES } from "@src/Routes";

export function Page2() {
  return (
    <div>
      <h1>Page 2</h1>

      <Link to={ROUTES.Home}>Go Home</Link>
    </div>
  );
}
