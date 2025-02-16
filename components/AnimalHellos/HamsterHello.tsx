import { Image, Text, View } from "react-native";

const HamsterHello = () => {
  return (
    <View className="items-center">
      <Image
        source={require("@/assets/images/hamster.png")}
        style={{ width: 55, height: 70 }}
      />
      <Text className="text-lg">*munch*</Text>
    </View>
  );
};

export { HamsterHello };
