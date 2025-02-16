import { Text, View, Image } from "react-native";

const RabbitHello = () => {
  return (
    <View className="items-center">
      <Image
        source={require("@/assets/images/rabbit.png")}
        style={{ width: 53, height: 90 }}
      />
      <Text className="text-lg">*boing*</Text>
    </View>
  );
};

export { RabbitHello };
