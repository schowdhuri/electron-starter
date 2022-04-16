import { Link } from "react-router-dom";
import { ROUTES } from "@src/Routes";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang/LangKeys";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>
        <FormattedMessage id={LangKeys.AppTitle} defaultMessage="welcome" />
      </h2>
      <Link to={ROUTES.Page2}>Page 2</Link>
    </div>
  );
}
