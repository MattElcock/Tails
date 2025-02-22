import { ACCENT_COLOUR, BACKGROUND_COLOUR } from "@/constants";
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
          headerShown: false,
        }}
      />
      <Stack.Screen name="createAccount" options={{ title: "" }} />
      <Stack.Screen name="resetPassword" options={{ title: "" }} />
    </Stack>
  );
}
