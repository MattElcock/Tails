import createScreenOptions from "@/utils/createScreenOptions";
import { Stack } from "expo-router";

export default function Layout() {
  const screenOptions = createScreenOptions({
    backConfig: { href: "/login", text: "login" },
    showProfileButton: false,
  });

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
