import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      {/* <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity> */}
      <Image
        style={styles.logo}
        source={require('../assets/images/logo5.png')}
      />
      <View style={styles.iconsRight}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="search" size={24} color="tomato" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="add-circle-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="notifications-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    marginTop: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#141517',
  },
  logo: {
    width: 65,
    height: 50,
    resizeMode: 'contain',
  },
  iconsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
    
  },
});

export default Navbar;
