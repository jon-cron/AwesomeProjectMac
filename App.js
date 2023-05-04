// NOTE first run 'npm install @react-navigation/native'
// NOTE then run 'npx expo install react-native-screens react-native-safe-area-context' IF YOU ARE USING EXPO
// NOTE then run 'npx expo install @react-navigation/native-stack'
// NOTE to use bottom tab or draw I had to run 'npx expo install react-native-gesture-handler react-native-reanimated'
// NOTE I then ran into an issue with version two so then run 'npm install react-native-reanimated@1 --save --save-exact'
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen.js";
import MealDetailsScreen from "./screens/MealDetailsScreen.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen.js";
import {Ionicons} from '@expo/vector-icons'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (<Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "#ffffff",
    // NOTE to set the background color of the drawer you set the sceneContainerStyle as shown below
    sceneContainerStyle: { backgroundColor: "#3f2f25" },
    drawerContentStyle: {backgroundColor: "#351401"},
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: "#351401",
    drawerActiveBackgroundColor: '#e4baa1'
  }}>
    <Drawer.Screen name="MealCategories" component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size} />
    }}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
      drawerIcon: ({color, size}) => <Ionicons name="heart" color={color} size={size}/>
    }}/>
  </Drawer.Navigator>)
}

export default function App() {
  return (
    <>
      {/* NOTE changing the statusbar to light changes the icons like wifi and battery to white instead of dark */}
      <StatusBar style="light" />
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
            component={DrawerNavigator}
            // NOTE if you want to customize screens then place the styling within that screen
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen}/>
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} 
        //  NOTE this is one way of placing an item in the header but you cannot get interactivity with the screen that you are on since the functionality is in the app.js file
         // options={{
          //   headerRight: () => {
          //     return <Button title='tap me'/>
          //   }
          // }}
          />
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
