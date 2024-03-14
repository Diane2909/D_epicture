import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import SubredditItem from '../components/SubredditItem';
import { fetchPopularSubreddits } from '../api/RedditAPI';

const SubredditList = () => {
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    const loadSubreddits = async () => {
      const fetchedSubreddits = await fetchPopularSubreddits();
      setSubreddits(fetchedSubreddits);
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
          <SubredditItem
          img={item.mobile_banner_image}
          title={item.display_name}
          description={item.public_description}
          subscribers={item.subscribers}
            onJoinPress={() => handleJoinPress(item)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SubredditList;
