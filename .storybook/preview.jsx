import { RecoilRoot } from "recoil";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { IntlProvider } from "@atoms/IntlProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000, // 60 sec
    },
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <HashRouter>
      <RecoilRoot>
        <IntlProvider>
          <QueryClientProvider client={queryClient}>
            {Story()}
          </QueryClientProvider>
        </IntlProvider>
      </RecoilRoot>
    </HashRouter>
  ),
];
