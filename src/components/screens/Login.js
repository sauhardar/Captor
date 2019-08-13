import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    paddingLeft: 10,
    color: 'black'
  },
  instructions: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },
  textInput: {
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 20,
    textAlign: 'left'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  submitText: {
    backgroundColor: 'royalblue',
    color: 'white',
    padding: 10,
    borderRadius: 20
  },
  submitContainer: { alignItems: 'flex-end' }
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  static navigationOptions = {
    headerTitle: 'Login',
    gesturesEnabled: true,
    headerBackImage: <FontAwesome5 style={styles.icon} name={'arrow-left'} />
  };

  loginSubmit() {
    console.log('submit pressed');
    this.props.navigation.navigate('Home');
    console.log('Navigating to home');

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Enter your email and password to sign up for an account
        </Text>
        <TextInput
          onChangeText={text => this.setState({ email: text })}
          style={styles.textInput}
          placeholder="Email"
          value={this.state.email}
        />
        <TextInput
          onChangeText={text => this.setState({ password: text })}
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.submitContainer}
          onPress={this.loginSubmit.bind(this)}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
