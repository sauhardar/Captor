import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native';
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
  iconContainerBot: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
    padding: 15
  },
  icon: {
    color: 'rgb(1,23,48)',
    fontSize: 32,
    marginTop: 18
  }
});

class Main extends Component {
  static navigationOptions = {
    header: 'null'
  };

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('dark-content');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle="dark-content"
        />

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
