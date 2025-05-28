import { Tabs } from "expo-router";

export default function TabsLayout() {
  return <Tabs>
  <Tabs.Screen
    name="index"
    options={{
      headerTitle: "Sticker Smash", 
      headerTitleAlign: "center"
    }}
  />
</Tabs>
}
