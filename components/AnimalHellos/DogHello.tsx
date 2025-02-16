import { Image, Text, View } from "react-native";

const DogHello = () => {
  return (
    <View className="items-center">
      <Image
        source={require("@/assets/images/dog.png")}
        style={{ width: 63, height: 90 }}
      />
      <Text className="text-lg">*woof*</Text>
    </View>
  );
};

export { DogHello };
