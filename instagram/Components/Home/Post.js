import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import post from "../../data/posts";

const Post = ({ post }) => {
  return (
    <View
      style={{
        width: "100%",
        // backgroundColor: "#000",
        borderWidth:0.3,
        borderBottomColor:'#000',
        paddingBottom:10
      }}
    >
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      padding:5,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_img }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", marginLeft: 5, fontWeight: "900" }}>
      ...
    </Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.image }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View>
    <FooterButtons />
    <FooterDetails post={post} />
  </View>
);

const FooterButtons = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 10,
    }}
  >
    <View style={{ flexDirection: "row", paddingHorizontal:4 }}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/like.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require("../../assets/comment.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require("../../assets/send.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
    </View>

    <View>
      <TouchableOpacity>
        <Image
          source={require("../../assets/bookmark.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
    </View>
  </View>
);
const FooterDetails = ({ post }) => (
  <>
    {/* Liks */}
    <Text style={{paddingHorizontal:8}} >{post.likes} likes</Text>
    {/* Cpation */}
    <View style={{marginVertical:10, paddingHorizontal:7}}>
      <Text style={{textAlign:'justify'}}>
        <Text style={{fontWeight:900}}>{post.user} </Text>
        <Text style={{}}>{post.caption}</Text>
      </Text>
    </View>
    {/* Comment */}
    {!!post.comments.length && (
      <Text style={{paddingHorizontal:7, marginBottom:7}}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length < 1 ? "comments" : "comment"}
      </Text>
    )}
    <Comments post={post} />
  </>
);
const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ marginTop: 10 , paddingHorizontal:7}}>
        <Text>
          <Text style={{fontWeight:900}}>{comment.user} </Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);
export default Post;

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginLeft: 3,
    borderWidth: 3,
    borderColor: "tomato",
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode:'stretch'
  },
});
