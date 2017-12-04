import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform
} from 'react-native';

export default class NewGame extends React.Component {
  render() {
    return (
      <View style={styles.myPage}>
        <Text>NewGame</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myPage: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: 64
  }
});
