import useListPets from "@/api/pets/useListPets";
import { Text, ToastAndroid, View } from "react-native";
import { Empty } from "./components/Empty";
import { List } from "./components/List";
import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import { Loading } from "../Loading";

const ListPets = () => {
  const { isLoading, data, error } = useListPets();
  const router = useRouter();

  if (isLoading) {
    return <Loading />;
  }

  if (!data || error) {
    ToastAndroid.showWithGravity(
      "Oops! Something went wrong. Please try again or contact us for support.",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM
    );
    console.error("Error listing pets:", error);
    return <Text>Error</Text>;
  }

  const handleAddPetPress = () => {
    router.push("/(app)/addPet");
  };

  return (
    <View className="gap-10">
      <View className="flex-row justify-between items-center">
        <Text className="text-3xl font-medium">Your pets</Text>
        {data.length > 0 && (
          <Button
            variant="ghost"
            colorScheme="primary"
            size="medium"
            onPress={handleAddPetPress}
          >
            Add pet
          </Button>
        )}
      </View>

      {data.length === 0 ? <Empty /> : <List pets={data} />}
    </View>
  );
};

export { ListPets };
