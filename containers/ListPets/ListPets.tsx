import { Button } from "@/components/Button";
import { View, Text, Image } from "react-native";

const Empty = () => {
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
      >
        Add your first pet
      </Button>
    </View>
  );
};

const ListPets = () => {
  return (
    <View className="gap-10">
      <Text className="text-3xl font-medium">Your pets</Text>
      <Empty />
    </View>
  );
};

export { ListPets };
