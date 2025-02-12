import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useQuery } from "@tanstack/react-query";

const checkSession = async (user: FirebaseAuthTypes.User) => {
  try {
    const token = await user.getIdToken(true); // Force refresh the ID token
    if (!token) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error("Error checking session validity", error);
    return false;
  }
};

const useCheckSession = (user: FirebaseAuthTypes.User | null) => {
  const queryFn = () => checkSession(user!);

  const query = useQuery({
    queryKey: [], // Do not cache response
    queryFn: queryFn,
    enabled: user !== null,
  });

  return query;
};

export default useCheckSession;
