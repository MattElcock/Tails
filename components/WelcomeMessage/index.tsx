import { BirdHello } from "@/components/AnimalHellos/BirdHello";
import { CatHello } from "@/components/AnimalHellos/CatHello";
import { DogHello } from "@/components/AnimalHellos/DogHello";
import { RabbitHello } from "@/components/AnimalHellos/RabbitHello";
import { RatHello } from "@/components/AnimalHellos/RatHello";
import { TurtleHello } from "@/components/AnimalHellos/TurtleHello";
import { Text, View } from "react-native";

const ThatMeansHello = () => {
  return (
    <View className="items-center">
      <Text className="text-3xl">...That means</Text>
      <Text className="text-5xl text-accent font-semibold">hello!</Text>
    </View>
  );
};

const WelcomeMessage = () => {
  return (
    <View className="items-center">
      <View className="mb-[-20px]">
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
      <View className="mt-[-20px]">
        <CatHello />
      </View>
    </View>
  );
};

export { WelcomeMessage };
