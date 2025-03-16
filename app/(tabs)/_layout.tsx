import { Stack, Tabs } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
