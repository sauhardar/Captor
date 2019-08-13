import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Example extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
        <Text
          style={{
            fontSize: 30
          }}
        >
          This is the Example page. Press here to go back to the main screen
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Example;
