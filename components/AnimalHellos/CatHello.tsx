import { Image, Text, View } from "react-native";

const CatHello = () => {
  return (
    <View className="items-center">
      <Image
        source={require("@/assets/images/cat.png")}
        style={{ width: 73, height: 70 }}
      />
      <Text className="text-lg">*meow*</Text>
    </View>
  );
};

export { CatHello };
