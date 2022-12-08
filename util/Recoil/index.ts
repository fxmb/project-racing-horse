import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Product } from "../../types";

const { persistAtom } = recoilPersist();

export const checkoutProductsList = atom<Product[]>({
  key: "checkoutProductsList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
