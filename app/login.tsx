import { Text, TouchableOpacity, View } from "react-native";
import { Dog, Cat, Rat, Bird, Turtle, Rabbit } from "lucide-react-native";
import { Button } from "@/components/Button";

const ThatMeansHello = () => {
  return (
    <View className="items-center">
      <Text className="text-3xl">...That means</Text>
      <Text className="text-5xl text-accent font-semibold">hello!</Text>
    </View>
  );
};

const DogHello = () => {
  return (
    <View className="items-center">
      <Dog size={70} />
      <Text className="text-2xl">*woof*</Text>
    </View>
  );
};

const CatHello = () => {
  return (
    <View className="items-center">
      <Cat size={70} />
      <Text className="text-2xl">*mew*</Text>
    </View>
  );
};

const RatHello = () => {
  return (
    <View className="items-center">
      <Rat size={70} />
      <Text className="text-2xl">*squeek*</Text>
    </View>
  );
};

const BirdHello = () => {
  return (
    <View className="items-center">
      <Bird size={70} />
      <Text className="text-2xl">*chirp*</Text>
    </View>
  );
};

const TurtleHello = () => {
  return (
    <View className="items-center">
      <Turtle size={70} />
      <Text className="text-2xl">*munch*</Text>
    </View>
  );
};

const RabbitHello = () => {
  return (
    <View className="items-center">
      <Rabbit size={70} />
      <Text className="text-2xl">*boing*</Text>
    </View>
  );
};

const WelcomeMessage = () => {
  return (
    <View className="items-center">
      <View className="mb-[-10px]">
        <DogHello />
      </View>
      <View className="flex-row items-center gap-8">
        <View className="gap-8">
          <RatHello />
          <BirdHello />
        </View>
        <ThatMeansHello />
        <View className="gap-8">
          <TurtleHello />
          <RabbitHello />
        </View>
      </View>
      <View className="mt-[-10px]">
        <CatHello />
      </View>
    </View>
  );
};

export default function Index() {
  return (
    <View className="h-screen bg-background px-10">
      <View className="mt-[10rem]">
        <WelcomeMessage />
        <View className="mt-20 gap-3">
          <Button variant="solid" colorScheme="primary" size="large">
            Log In
          </Button>
          <Button variant="ghost" colorScheme="primary" size="medium">
            Create an Account
          </Button>
        </View>
      </View>
    </View>
  );
}
