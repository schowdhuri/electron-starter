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

import { type BinaryLike, createHash } from "crypto";
import { exposeInMainWorld } from "./exposeInMainWorld";

function sha256sum(data: BinaryLike) {
  return createHash("sha256").update(data).digest("hex");
}

// Export for types in contracts.d.ts
export const nodeCrypto = { sha256sum } as const;

exposeInMainWorld("nodeCrypto", nodeCrypto);
