import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class AllPosts extends Component {
  static navigationOptions = {
    header: 'null',
    // tabBarIcon: (
    //   <FontAwesome5 style={{ fontSize: 25 }} name={'file-alt'} regular />
    // ),
    tabBarLabel: "View All"
  };

  render() {
    return (
      <View>
        <Text> All posts page </Text>
      </View>
    );
  }
}
