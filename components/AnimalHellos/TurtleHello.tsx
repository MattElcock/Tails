import { Turtle } from "lucide-react-native";
import { Text, View } from "react-native";

const TurtleHello = () => {
  return (
    <View className="items-center">
      <Turtle size={60} strokeWidth={1} />
      <Text className="text-2xl">*munch*</Text>
    </View>
  );
};

export { TurtleHello };
