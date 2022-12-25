import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import AppWrapper from "./src/routes/AppWrapper";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppWrapper />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
