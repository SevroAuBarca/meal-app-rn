import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "react-native-magnus";

import { Home, Categories, Favorites, Random, Users } from "./Screens";
import Navigation from "./Navigation/Navigation";
/* const Stack = createNativeStackNavigator();
 */

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    backgroundColor: "red",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
