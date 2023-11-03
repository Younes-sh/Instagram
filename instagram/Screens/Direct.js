import { View, Text, StyleSheet } from "react-native";

export default function Direct() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Direct</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#002002",
    fontSize: 35,
  },
});
