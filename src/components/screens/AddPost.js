import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class AddPost extends Component {
  static navigationOptions = {
    header: 'null',
    tabBarLabel: 'Add Issue'
  };
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBackgroundColor('black');
      StatusBar.setTranslucent(false);
      StatusBar.setBarStyle('light-content');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <View>
        <Text> Add Post page </Text>
      </View>
    );
  }
}
