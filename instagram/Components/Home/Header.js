import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from "react-native";
import React from "react";

const Header = () => {
  return (
    <SafeAreaView style={styles.Header}>
      <TouchableOpacity>
        <Image source={require("../../assets/instagramText.png")} style={styles.logo} />
      </TouchableOpacity>

      

      <View style={styles.iconContainer}>
      <TouchableOpacity>
        <Image source={require("../../assets/add.png")} style={styles.logoGroup} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require("../../assets/like.png")} style={styles.logoGroup} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require("../../assets/chat.png")} style={styles.logoGroup} />
        <Text style={styles.badg} >{17}</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    width:'100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  iconContainer: {
    flexDirection: "row",
    paddingHorizontal:5,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  logoGroup: {
    width:30,
    height:30,
    marginHorizontal:7,
    resizeMode:'contain'
  },
  badg: {
    position:'absolute',
    width:20,
    height:20,
    borderRadius:25,
    backgroundColor:'tomato',
    color:'#fff',
    fontSize:15,
    padding:1,
    top:-8,
    right:2,
  },
});
