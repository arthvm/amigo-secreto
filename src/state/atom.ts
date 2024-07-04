import { atom } from "recoil";

export const participantsListState = atom<string[]>({
  key: "participantsListState",
  default: [],
});

export const drawResultState = atom<Map<string, string>>({
  key:"drawResultState",
  default: new Map()
})

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});
