import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SubredditItem = ({ title, description, onJoinPress, img, subscribers}) => {
  return (
    <View style={styles.container}>
      { img ? (
        <Image source={{ uri: img }} style={styles.image}/>
      ) : null}
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
      <View style={styles.buttonContainer}>
      <View style={styles.voteContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-up" size={20} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-down" size={20} color='white'/>
        </TouchableOpacity>
        </View>
        <View style={styles.comContainer}>
        <TouchableOpacity style={styles.buttonCom}>
          <Icon name="comment" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCom}>
          <Icon name="download" size={20} />
        </TouchableOpacity>
      </View>
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
  subscribers: {
    fontSize : 12,
    color: 'red'
    },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize : 20,
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
    buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 8,
    },
    voteContainer: {
      flexDirection: 'row',
      backgroundColor : '#C0C0C0',
      borderRadius : 8,
      },
    comContainer: {
    flexDirection: 'row',
    },
    button: {
    padding: 8,
    },
    buttonCom: {
      padding: 8,
      marginLeft: 7,
      },
    buttonJoin: {
      marginLeft: 8,
      padding: 12,
      backgroundColor :'#005C96',
      borderRadius : 12,      
      },
    buttonTextJoin: {
      color : 'white'
    }
    });

export default SubredditItem;
