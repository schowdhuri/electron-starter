import { Routes, Route } from "react-router-dom";
import { Home } from "@pages/Home";
import { Page2 } from "@pages/Page2";

export const ROUTES = {
  Home: "/",
  Page2: "page2",
};

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.Home} element={<Home />} />
      <Route path={ROUTES.Page2} element={<Page2 />} />
    </Routes>
  );
}
