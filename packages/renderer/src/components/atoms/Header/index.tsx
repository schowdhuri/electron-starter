import { Box } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang/LangKeys";

export function Header() {
  return (
    <Box component="header">
      <FormattedMessage id={LangKeys.AppTitle} defaultMessage="Header" />
    </Box>
  );
}
