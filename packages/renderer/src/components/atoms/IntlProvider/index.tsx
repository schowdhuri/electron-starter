import { LangKeys } from "@src/constants/lang/LangKeys";
import { FC, useEffect, useMemo, useState } from "react";
import { IntlProvider as ReacIntlProvider } from "react-intl";

const SupportedLocales = {
  EN: "en",
  ES: "es",
};

const DEFAULT_LOCALE = SupportedLocales.EN;

export const IntlProvider: FC = ({ children }) => {
  const [messages, setMessages] = useState<{ [key in LangKeys]: string }>();
  const locale = useMemo(
    () =>
      navigator.language in SupportedLocales
        ? navigator.language
        : DEFAULT_LOCALE,
    [navigator.language]
  );

  useEffect(() => {
    console.log(navigator.language);
    import(/* @vite-ignore */ `../../../constants/lang/${locale}`).then(
      (val) => {
        setMessages(val.default);
      }
    );
  }, [locale]);

  return (
    <ReacIntlProvider locale={locale} messages={messages}>
      {children}
    </ReacIntlProvider>
  );
};