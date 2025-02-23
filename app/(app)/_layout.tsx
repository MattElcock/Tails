import useCheckSession from "@/api/authentication/useCheckSession";
import { ACCENT_COLOUR } from "@/constants";
import auth from "@react-native-firebase/auth";
import { Redirect, Stack, useRouter } from "expo-router";
import { User } from "lucide-react-native";
import React from "react";
import { Pressable, Text } from "react-native";

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

export default function AppLayout() {
  const user = auth().currentUser;
  const { data: isSessionValid, isLoading } = useCheckSession(user);

  if (!user) {
    return <Redirect href="/login" />;
  }

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (!isSessionValid) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: ACCENT_COLOUR },
        statusBarBackgroundColor: ACCENT_COLOUR,
        statusBarStyle: "dark",
        headerRight: () => <ProfileButton />,
      }}
    >
      <Stack.Screen name="welcome" options={{ title: "" }} />

      <Stack.Screen
        name="index"
        options={{ title: "", headerLeft: () => <React.Fragment /> }}
      />

      <Stack.Screen
        name="addPet"
        options={{
          title: "",
        }}
      />

      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "",
          headerRight: () => <React.Fragment />,
        }}
      />
    </Stack>
  );
}
