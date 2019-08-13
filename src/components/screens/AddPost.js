import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class AddPost extends Component {
  static navigationOptions = {
    header: 'null',
    tabBarLabel: "Add Issue"
  };
  render() {
    return (
      <View>
        <Text> Add Post page </Text>
      </View>
    );
  }
}
