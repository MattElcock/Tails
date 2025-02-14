import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ME_DETAIL_KEY, USERS_COLLECTION } from "./constants";
import { FirestoreDocumentUser } from "./types";
import removeUndefinedFields from "@/utils/removeUndefinedFields";

interface UpdateMeRequestData {
  firstName?: string;
  lastName?: string;
  seenAppPurposeDisclaimer?: false | string;
}

const useUpdateMe = () => {
  const queryClient = useQueryClient();
  const firestoreUser = auth().currentUser;

  if (!firestoreUser) {
    throw new Error("Cannot find firestore user");
  }

  const mutationFn = async (user: UpdateMeRequestData) => {
    const reqData: FirestoreDocumentUser = removeUndefinedFields({
      firstName: user.firstName,
      lastName: user.lastName,
      seenAppPurposeDisclaimer: user.seenAppPurposeDisclaimer,
    });

    await firestore()
      .collection(USERS_COLLECTION)
      .doc(firestoreUser.uid)
      .update(reqData);
  };

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ME_DETAIL_KEY });
    },
  });

  return mutation;
};

export default useUpdateMe;
