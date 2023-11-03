import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Users from "../../data/users";
const Stories = () => {
  return (
    <View style={{ marginTop: 15 ,height:70,  marginBottom:5}}>
      <ScrollView horizontal>
        {Users.map((story, index) => (
          <View key={index} style={{alignItems:'center'}}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "#000" }}>{story.username}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    paddingBottom:5,
    borderRadius: 50,
    marginHorizontal: 5,
    borderWidth: 3,
    borderColor: "red",
    
  },
});
