import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MySubredditItem = ({ title, description, onJoinPress, posts, img, subscribers }) => {
  return (
    <View style={styles.container}>
        { img ? (
        <Image source={{ uri: img }} style={styles.image}/>
      ) : null}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="ellipsis-h" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onJoinPress}>
            <Text>Join</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subscribers} >{subscribers} subscribers</Text>
      <Text style={styles.description}>{description}</Text>
      <View>
        {posts && posts.length > 0 ? (
            posts.map((post) => (
                <View style={styles.postsContainer} key={post.id}>
                    <Text>{post.title}</Text>
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
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  subscribers: {
    fontSize : 12,
    color: 'red'
    },
  title: {
    fontWeight: 'bold',
    fontSize : 16,
    color: 'black'
    },
    description: {
    fontSize: 14,
    color: 'grey',
    },
    actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    postsContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 8,
    padding: 8,
    },
    button: {
    marginLeft: 8,
    padding: 8,
    },
    });

export default MySubredditItem;
