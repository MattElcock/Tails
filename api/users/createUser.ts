import firestore from "@react-native-firebase/firestore";
import { useMutation } from "@tanstack/react-query";

interface CreateUserData {
  firestoreUid: string;
  firstName: string;
  lastName: string;
}

const useCreateUser = () => {
  const mutationFn = async (user: CreateUserData) => {
    await firestore().collection("users").doc(user.firestoreUid).set({
      firstName: user.firstName,
      lastName: user.lastName,
    });
  };

  const mutation = useMutation({
    mutationFn,
  });

  return mutation;
};

export default useCreateUser;
