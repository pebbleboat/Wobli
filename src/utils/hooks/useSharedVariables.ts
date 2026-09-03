import { useSearchParams } from "next/navigation";
import { storageKeys } from "../enum";
import { getLocalItem } from "../localstorage";

export default function useSharedVariables() {
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());
  const deviceId = getLocalItem<string>(storageKeys.REGISTERED_DEVICE_ID) || "";
  const currentUser = getLocalItem<Record<string, unknown>>(storageKeys.CURRENT_USER);

  return {
    queryParams,
    deviceId,
    currentUser,
  };
}
