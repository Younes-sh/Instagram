import { View, Text, StyleSheet } from "react-native";
import Register from "../Components/Login/LoginForm";
import Brand from '../Components/Login/Brand';

export default function Login() {
  return (
    <View style={styles.container}>
      <Brand />
      <Register /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingTop: 150,
    alignItems:'center',
  }
});
