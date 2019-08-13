import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Map } from '../views';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 30,
    position: 'absolute',
    top: '3%',
    fontWeight: '500',
    alignSelf: 'center'
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    top: '2%',
    justifyContent: 'space-between'
  },
  icon: {
    color: 'black',
    fontSize: 32
  }
});

class Main extends Component {
  static navigationOptions = {
    header: 'null',
  };

  render() {
    return (
      <View style={styles.container}>
        <Map />
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={{ marginLeft: '5%' }}
            onPress={() => this.props.navigation.openDrawer()}
          >
            <FontAwesome5 style={styles.icon} name={'bars'} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: '5%' }}>
            <FontAwesome5
              style={styles.icon}
              name={'filter'}
              onPress={() => alert('Filter pressed')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Main;
