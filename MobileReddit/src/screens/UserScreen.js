import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { fetchUserInfo } from '../../App';

const UserScreen = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userData = await fetchUserInfo();
                setUserInfo(userData);
                console.log('consolelog de userdata :', userData);
            } catch (error) {
                console.error('Echec recuperation info user', error)
            }
        };

        getUserData();
    }, []);

    if(!userInfo) {
        return (
            <View>
              <Text>Chargement des informations de l'utilisateur...</Text>
            </View>
          );
    }

  return (
    <View style={styles.container}>
        <Image
          style={styles.userIcon}
          source={{ uri: userInfo?.subreddit?.icon_img }}
        />
        <Text style={styles.username}>{userInfo?.subreddit?.display_name}</Text>
        <Text style={styles.description}>{userInfo?.subreddit?.public_description}</Text>
        <Text>{userInfo?.subreddit?.subscribers} abonnés</Text>
        <Text>{userInfo?.subreddit?.coins} coins</Text>
        <Text>{userInfo?.total_karma} karmas</Text>
        
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
    userIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 8,
    },
    username: {
    fontWeight: 'bold',
    fontSize : 16,
    },
    description: {
    fontSize: 14,
    color: 'grey',
    },
   
    });

export default UserScreen;
