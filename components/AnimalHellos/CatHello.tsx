import { Cat } from "lucide-react-native";
import { Text, View } from "react-native";

const CatHello = () => {
  return (
    <View className="items-center">
      <Cat size={60} strokeWidth={1} />
      <Text className="text-2xl">*meow*</Text>
    </View>
  );
};

export { CatHello };
