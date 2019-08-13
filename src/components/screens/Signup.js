import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 30,
    paddingLeft: 10,
    color: 'black'
  }
});

export default class Signup extends Component {
  static navigationOptions = {
    headerTitle: 'Sign up!',
    gesturesEnabled: true,
    headerBackImage: <FontAwesome5 style={styles.icon} name={'arrow-left'} />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> This is the sign up page </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text> Signed up? Click here. </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
