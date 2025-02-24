import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useMutation } from "@tanstack/react-query";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { PETS_COLLECTION } from "./constants";
import { FirestoreDocumentPet, Permission } from "./types";
import { Colour } from "./types/colour";
import { Pet } from "./types/pet";
import { Cat } from "./types/cat";
import { Dog } from "./types/dog";
import { Rodent } from "./types/rodent";
import { Reptile } from "./types/reptile";
import { Bird } from "./types/bird";

interface AddPetData {
  name: string;
  type: Pet;
  subType: Cat | Dog | Rodent | Reptile | Bird;
  dateOfBirth: Date;
  colour: Colour[];
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
      subType: pet.subType,
      dateOfBirth: pet.dateOfBirth,
      colour: pet.colour,
      sharedWith: {
        [firestoreUser.uid]: Permission.Admin,
      },
    };

    await firestore().collection(PETS_COLLECTION).doc(uuidv4()).set(reqData);
  };

  const mutation = useMutation({
    mutationFn,
  });

  return mutation;
};

export default useAddPet;
