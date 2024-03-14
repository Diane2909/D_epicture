import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import MySubredditItem from '../components/MySubredditItem';
import { getAccessToken } from '../../App';
import { getSubscribedSubreddits, fetchSubredditPosts } from '../api/RedditAPI';



const MySubredditList = () => {
  const [subreddits, setSubreddits] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [subredditPosts, setSubredditPosts] = useState({});

  useEffect(() => {
    const loadSubreddits = async () => {
      const token = await getAccessToken();
      setAccessToken(token);

      const subscribedSubreddits = await getSubscribedSubreddits(token)
      setSubreddits(subscribedSubreddits);

      const postsData = {};
      for (const subreddit of subscribedSubreddits) {
        const posts = await fetchSubredditPosts(token, subreddit.display_name);
        postsData[subreddit.display_name] = posts;
      }
      setSubredditPosts(postsData);
    };


    loadSubreddits();
  }, []);

  const handleJoinPress = (subreddit) => {
  };

  return (
    <View>
      <FlatList
        data={subreddits}
        renderItem={({ item }) => (
          <MySubredditItem
            img={item.header_img}
            title={item.display_name_prefixed}
            description={item.public_description}
            subscribers={item.subscribers}
            onJoinPress={() => handleJoinPress(item)}
            posts={subredditPosts[item.display_name]}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MySubredditList;
