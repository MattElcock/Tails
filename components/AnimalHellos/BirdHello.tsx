import { Image, Text, View } from "react-native";

const BirdHello = () => {
  return (
    <View className="items-center">
      <Image
        source={require("@/assets/images/bird.png")}
        style={{ width: 75, height: 70 }}
      />
      <Text className="text-lg">*chirp*</Text>
    </View>
  );
};

export { BirdHello };
