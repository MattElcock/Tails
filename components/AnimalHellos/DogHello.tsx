import { Dog } from "lucide-react-native";
import { Text, View } from "react-native";

const DogHello = () => {
  return (
    <View className="items-center">
      <Dog size={60} strokeWidth={1} />
      <Text className="text-2xl">*woof*</Text>
    </View>
  );
};

export { DogHello };
