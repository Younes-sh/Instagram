import { View, StyleSheet, Image } from "react-native";

export default function Home() {
  return (
    <View>
      <Image style={styles.logo} source={require("../../logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
  },
});
