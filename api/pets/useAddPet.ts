import firestore from "@react-native-firebase/firestore";
import { useMutation } from "@tanstack/react-query";
import {
  FirestoreDocumentPet,
  FurColours,
  Permission,
  PetTypes,
} from "./types";
import auth from "@react-native-firebase/auth";
import { PETS_COLLECTION } from "./constants";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

interface AddPetData {
  name: string;
  type: PetTypes;
  dateOfBirth: Date;
  furColour?: FurColours[];
}

const useAddPet = () => {
  const firestoreUser = auth().currentUser;

  if (!firestoreUser) {
    throw new Error("Cannot find firestore user");
  }

  const mutationFn = async (pet: AddPetData) => {
    const reqData: FirestoreDocumentPet = {
      name: pet.name,
      type: pet.type,
      dateOfBirth: pet.dateOfBirth,
      sharedWith: {
        [firestoreUser.uid]: Permission.Admin,
      },
    };

    if (pet.furColour) {
      reqData.furColour = pet.furColour;
    }

    await firestore().collection(PETS_COLLECTION).doc(uuidv4()).set(reqData);
  };

  const mutation = useMutation({
    mutationFn,
  });

  return mutation;
};

export default useAddPet;
