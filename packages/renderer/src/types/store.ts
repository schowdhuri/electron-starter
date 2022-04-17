import type { Schema } from "electron-store";

export enum StoreKeys {
  UserInfo = "UserInfo",
  Permissions = "Permissions",
}

// TS types for StoreSchema
export interface IStoreSchema {
  [StoreKeys.UserInfo]: IUserInfo;
  [StoreKeys.Permissions]: Array<IUserPermission>;
}

export interface IUserInfo {
  username: string;
  password: Buffer;
}

export type UserInfoInputType = Omit<IUserInfo, "password"> & {
  password: string;
};

export interface IUserPermission {
  name: string;
}

// this schema is used by electron-store
// must mirror IStoreSchema
export const StoreSchema: Schema<IStoreSchema> = {
  [StoreKeys.UserInfo]: {
    type: "object",
    required: [],
    properties: {
      username: { type: "string" },
    },
  },
  [StoreKeys.Permissions]: {
    type: "array",
    default: [],
    items: {
      type: "object",
      required: [],
      properties: {
        name: { type: "string" },
      },
    },
  },
};
