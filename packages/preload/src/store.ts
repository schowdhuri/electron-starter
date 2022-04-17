import { ipcRenderer } from "electron";
import { exposeInMainWorld } from "./exposeInMainWorld";
import type { UserInfoInputType } from "./types";

// Export for types in contracts.d.ts
export const store = {
  storeUserinfo: async (data?: UserInfoInputType) =>
    ipcRenderer.invoke("store:userinfo", data),
};

exposeInMainWorld("electronStore", store);
