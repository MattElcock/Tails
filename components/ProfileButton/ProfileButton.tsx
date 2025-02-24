import { useRouter } from "expo-router";
import { User } from "lucide-react-native";
import React from "react";
import { Pressable } from "react-native";

const ProfileButton = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/(app)/profile");
  };

  return (
    <Pressable onPressOut={handlePress}>
      <User />
    </Pressable>
  );
};

export { ProfileButton };
