import createScreenOptions from "@/utils/createScreenOptions";
import { Stack } from "expo-router";

export default function Layout() {
  const screenOptions = createScreenOptions({
    backConfig: { href: "/(app)", text: "home" },
  });

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
