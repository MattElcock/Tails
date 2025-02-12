import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useQuery } from "@tanstack/react-query";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

interface User {
  firstName: string;
  lastName: string;
  emailAddress: string;
}

const getUser = async (
  user: FirebaseAuthTypes.User
): Promise<User | undefined> => {
  const firebaseUser = await firestore()
    .collection("users")
    .doc(user.uid)
    .get();

  const data = firebaseUser.data();

  if (!data) {
    return undefined;
  }

  return {
    firstName: data.firstName,
    lastName: data.lastName,
    emailAddress: user.email!,
  };
};

const useUser = () => {
  const firestoreUser = auth().currentUser;

  if (!firestoreUser) {
    throw new Error("Cannot find firestore user");
  }

  const queryFn = () => getUser(firestoreUser);

  const query = useQuery({
    queryKey: ["user"],
    queryFn: queryFn,
  });

  return query;
};

export default useUser;
