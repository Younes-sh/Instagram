import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from "../Components/Home/Header";
import Story from "../Components/Home/Stories";
import Posts from "../data/posts";
import Post from "../Components/Home/Post";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Story />
      <ScrollView style={{width:'100%'}}>
        {Posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    color: "#002002",
    fontSize: 35,
  },
});
