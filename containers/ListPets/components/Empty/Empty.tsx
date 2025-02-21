import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";

const Empty = () => {
  const router = useRouter();

  const handleAddFirstPetPress = () => {
    router.push("/(app)/addPet");
  };

  return (
    <View className="items-center gap-5">
      <Image
        source={require("@/assets/images/tortoise.png")}
        style={{ width: 147, height: 80 }}
      />
      <Button
        variant="solid"
        colorScheme="primary"
        size="medium"
        className="w-full"
        onPress={handleAddFirstPetPress}
      >
        Add your first pet
      </Button>
    </View>
  );
};

export { Empty };
