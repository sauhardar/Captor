import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: 'white', fontSize: 30 },
  button: {
    marginBottom: 10,
    backgroundColor: 'gray',
    borderRadius: 20,
    padding: 5
  }
});

export default class Welcome extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          // LOGIN BUTTON
          onPress={() => this.props.navigation.navigate('Login')}
          >
          <Text style={styles.text}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          // SIGN UP BUTTON
          onPress={() => this.props.navigation.navigate('Signup')}
        >
          <Text style={styles.text}> Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
