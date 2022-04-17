import { ipcMain, safeStorage } from "electron";
import Store from "electron-store";
import type {
  IStoreSchema,
  IUserInfo,
  UserInfoInputType,
  IUserPermission,
} from "@src/types";
import { StoreKeys, StoreSchema } from "@src/types";

const store = new Store<IStoreSchema>({ schema: StoreSchema });

export function registerStoreHandlers() {
  ipcMain.handle("store:userinfo", async (_, payload?: UserInfoInputType) => {
    const prevData = store.get(StoreKeys.UserInfo);
    // retrieve encrypted data like so:
    // safeStorage.decryptString(Buffer.from(prevData.password));
    if (!payload) {
      return prevData;
    }
    const userInfo: IUserInfo = {
      ...payload,
      // encrypt sensitive data before storage
      password: safeStorage.encryptString(payload.password),
    };
    store.set(StoreKeys.UserInfo, {
      ...(prevData ?? {}),
      ...userInfo,
    });
    return store.get(StoreKeys.UserInfo);
  });

  ipcMain.handle(
    "store:permissions",
    async (_, permissions?: Array<IUserPermission>) => {
      const prevData = store.get(StoreKeys.Permissions);
      if (!permissions) {
        return prevData;
      }
      store.set(StoreKeys.Permissions, [...(prevData || []), ...permissions]);
      return store.get(StoreKeys.Permissions);
    }
  );
}
