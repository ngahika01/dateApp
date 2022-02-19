import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./app/config/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FeedNavigator from "./app/navigators/FeedNavigator";
import { AppRegistry } from "react-native-web";

export default function App() {
  const scheme = useColorScheme();
  const user = "mike";

  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <StatusBar style={ "auto"} />
          <SafeAreaProvider>
            <FeedNavigator />
          </SafeAreaProvider>
        </NavigationContainer>
      </PaperProvider>
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
AppRegistry.registerComponent(App, () => Main);
