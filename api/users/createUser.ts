import firestore from "@react-native-firebase/firestore";
import { useMutation } from "@tanstack/react-query";
import { FirestoreDocumentUser } from "./types";
import { USERS_COLLECTION } from "./constants";

interface CreateUserData {
  firestoreUid: string;
  firstName: string;
  lastName: string;
}

const useCreateUser = () => {
  const mutationFn = async (user: CreateUserData) => {
    const reqData: FirestoreDocumentUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      seenAppPurposeDisclaimer: false,
    };

    await firestore()
      .collection(USERS_COLLECTION)
      .doc(user.firestoreUid)
      .set(reqData);
  };

  const mutation = useMutation({
    mutationFn,
  });

  return mutation;
};

export default useCreateUser;
