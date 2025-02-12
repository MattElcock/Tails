import { Rabbit } from "lucide-react-native";
import { Text, View } from "react-native";

const RabbitHello = () => {
  return (
    <View className="items-center">
      <Rabbit size={60} strokeWidth={1} />
      <Text className="text-2xl">*boing*</Text>
    </View>
  );
};

export { RabbitHello };
