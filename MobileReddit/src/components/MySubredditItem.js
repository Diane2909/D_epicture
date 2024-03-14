import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MySubredditItem = ({
  title,
  description,
  onJoinPress,
  posts,
  img,
  subscribers,
}) => {
  const limitText = (text) => {
    const words = text.split(" ");
    const slicedText = words.slice(0, 100);
    return slicedText.join(" ");
  };

  return (
    <View style={styles.container}>
      {img ? <Image source={{ uri: img }} style={styles.image} /> : null}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="ellipsis-h" size={16} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonJoin} onPress={onJoinPress}>
            <Text style={styles.buttonTextJoin}>Join</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subscribers}>{subscribers} subscribers</Text>
      <Text style={styles.description}>{description}</Text>
      <View>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <View style={styles.postsContainer} key={post.id}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postAuthor}>by {post.author}</Text>
              <Text style={styles.postText}>{limitText(post.selftext)}</Text>
              <View style={styles.buttonPlusContainer}>
                <TouchableOpacity style={styles.buttonPlus}>
                  <Icon name="ellipsis-h" size={16} color="tomato" />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text>No posts available</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 8,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  subscribers: {
    fontSize: 12,
    color: "red",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  description: {
    fontSize: 14,
    color: "grey",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  postsContainer: {
    borderColor: "grey",
    borderWidth: 1,
    justifyContent: "flex-start",
    marginTop: 8,
    padding: 8,
  },
  button: {
    marginLeft: 8,
    padding: 8,
  },
  buttonJoin: {
    marginLeft: 8,
    padding: 12,
    backgroundColor: "#005C96",
    borderRadius: 12,
  },
  buttonTextJoin: {
    color: "white",
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
  postAuthor: {
    fontSize: 8,
    color: "tomato",
    marginBottom: 8,
  },
  postText: {
    fontSize: 12,
    color: "grey",
  },
  buttonPlusContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  buttonPlus: {
    marginLeft: 8,
    padding: 8,
  },
});

export default MySubredditItem;
