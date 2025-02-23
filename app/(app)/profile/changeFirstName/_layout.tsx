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
      <Stack.Screen name="index" options={{ title: "" }} />
    </Stack>
  );
}
