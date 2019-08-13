import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileContainer: {
    height: '17%',
    flexDirection: 'row',
    borderColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center'
  },
  profileName: {
    fontSize: 28,
    fontWeight: '500'
  },
  profilePic: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    marginLeft: 20,
    borderRadius: 50
  },
  link: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20
  }
});

export default class Drawer extends Component {
  navLink(text, dest) {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(dest)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => this.props.navigation.navigate('UserProfile')}
          activeOpacity={0.8}
        >
          <Image
            style={styles.profilePic}
            source={{ uri: 'https://picsum.photos/id/902/100/100' }}
          />
          <Text style={styles.profileName}>Jane Doe</Text>
        </TouchableOpacity>
        <View>
          {this.navLink('View Posts', 'AllPosts')}
          {this.navLink('Settings', 'Settings')}
        </View>
      </View>
    );
  }
}
