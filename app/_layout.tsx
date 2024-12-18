import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* 헤더를 숨기려면 headerShown: false */}
      <Stack.Screen name="index" />
    </Stack>
  );
}
