import { useRecoilState } from "recoil";
import { errorState } from "../atom";

export function useErrorState() {
  const [errorMsg, setErrorMsg] = useRecoilState(errorState);
  return {
    errorMsg,
    setErrorMsg,
  };
}
