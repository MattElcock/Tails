import { ACCENT_COLOUR } from "@/constants";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: ACCENT_COLOUR },
        statusBarBackgroundColor: ACCENT_COLOUR,
        statusBarStyle: "dark",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="changeFirstName"
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="changeLastName"
        options={{
          headerShown: false,
          title: "",
        }}
      />
    </Stack>
  );
}
