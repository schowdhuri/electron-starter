// =============================================================================
//  Copyright 2022 Copyright Owner
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

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
            <AppRoutes />
          </QueryClientProvider>
        </IntlProvider>
      </RecoilRoot>
    </StrictMode>
  </HashRouter>,
  document.getElementById("app")
);
