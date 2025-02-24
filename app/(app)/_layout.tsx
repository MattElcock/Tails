import useCheckSession from "@/api/authentication/useCheckSession";
import createScreenOptions from "@/utils/createScreenOptions";
import auth from "@react-native-firebase/auth";
import { Redirect, Stack } from "expo-router";
import React from "react";
import { Text } from "react-native";

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

  const screenOptions = createScreenOptions({});

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="welcome"
        options={{
          headerRight: () => <React.Fragment />,
        }}
      />
      <Stack.Screen
        name="addPet"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
