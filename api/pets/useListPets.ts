import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import "react-native-get-random-values";
import { PETS_COLLECTION, PETS_LIST_KEY } from "./constants";
import { FirestoreDocumentPet, Permission } from "./types";
import { sortBy } from "lodash";

const useListPets = () => {
  const firestoreUser = auth().currentUser;

  if (!firestoreUser) {
    throw new Error("Cannot find firestore user");
  }

  const queryFn = async () => {
    const firebaseDocumentPet = await firestore()
      .collection(PETS_COLLECTION)
      .where(`sharedWith.${firestoreUser.uid}`, "in", [
        Permission.View,
        Permission.Edit,
        Permission.Admin,
      ])
      .get();

    const data = firebaseDocumentPet.docs.map(
      (doc) => doc.data() as FirestoreDocumentPet
    );

    return sortBy(data, "name");
  };

  const mutation = useQuery({
    queryFn,
    queryKey: [PETS_LIST_KEY],
  });

  return mutation;
};

export default useListPets;
