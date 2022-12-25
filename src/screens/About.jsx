import { StyleSheet, Text, View } from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        About screen
      </Text>
    </View>
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
