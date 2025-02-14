import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useQuery } from "@tanstack/react-query";
import auth from "@react-native-firebase/auth";
import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import { ME_DETAIL_KEY, USERS_COLLECTION } from "./constants";
import { FirestoreDocumentUser, User } from "./types";

const getMe = async (
  user: FirebaseAuthTypes.User
): Promise<User | undefined> => {
  const firebaseUser: FirebaseFirestoreTypes.DocumentSnapshot<FirestoreDocumentUser> =
    await firestore().collection(USERS_COLLECTION).doc(user.uid).get();

  const data = firebaseUser.data();

  if (!data) {
    return undefined;
  }

  return {
    emailAddress: user.email,
    firstName: data.firstName,
    lastName: data.lastName,
    seenAppPurposeDisclaimer: data.seenAppPurposeDisclaimer,
  };
};

const useMe = () => {
  const firestoreUser = auth().currentUser;

  if (!firestoreUser) {
    throw new Error("Cannot find firestore user");
  }

  const queryFn = () => getMe(firestoreUser);

  const query = useQuery({
    queryKey: ME_DETAIL_KEY,
    queryFn: queryFn,
  });

  return query;
};

export default useMe;
