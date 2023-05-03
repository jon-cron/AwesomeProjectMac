// NOTE first run 'npm install @react-navigation/native'
// NOTE then run 'expo install react-native-screens react-native-safe-area-context' IF YOU ARE USING EXPO
// NOTE then run 'expo install @react-navigation/native-stack'
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* NOTE changing the statusbar to light changes the icons like wifi and battery to white instead of dark */}
      <StatusBar style="dark" />
      <NavigationContainer>
        {/* NOTE initially the first screen would be the first Stack.Screen but that can be altered using the initialRouteName */}
        <Stack.Navigator
          initialRouteName="Categories"
          // NOTE if you want styling to cover all screens then place the styling in the stack.navigator like this.
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#ffffff",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            // NOTE if you want to customize screens then place the styling within that screen
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
