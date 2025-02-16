import { Rat } from "lucide-react-native";
import { Text, View, Image } from "react-native";

const RatHello = () => {
  return (
    <View className="items-center">
      <Image
        source={require("@/assets/images/rat.png")}
        style={{ width: 61, height: 70 }}
      />
      <Text className="text-lg">*squeek*</Text>
    </View>
  );
};

export { RatHello };
