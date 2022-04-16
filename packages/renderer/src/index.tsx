import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { IntlProvider } from "@atoms/IntlProvider";
import { AppRoutes } from "./Routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000, // 60 sec
    },
  },
});

ReactDOM.render(
  <HashRouter>
    <StrictMode>
      <RecoilRoot>
        <IntlProvider>
          <QueryClientProvider client={queryClient}>
            <IntlProvider>
              <AppRoutes />
            </IntlProvider>
          </QueryClientProvider>
        </IntlProvider>
      </RecoilRoot>
    </StrictMode>
  </HashRouter>,
  document.getElementById("app")
);
