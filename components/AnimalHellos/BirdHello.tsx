import { Bird } from "lucide-react-native";
import { Text, View } from "react-native";

const BirdHello = () => {
  return (
    <View className="items-center">
      <Bird size={60} strokeWidth={1} />
      <Text className="text-2xl">*chirp*</Text>
    </View>
  );
};

export { BirdHello };
