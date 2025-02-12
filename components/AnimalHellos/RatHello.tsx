import { Rat } from "lucide-react-native";
import { Text, View } from "react-native";

const RatHello = () => {
  return (
    <View className="items-center">
      <Rat size={60} strokeWidth={1} />
      <Text className="text-2xl">*squeek*</Text>
    </View>
  );
};

export { RatHello };
