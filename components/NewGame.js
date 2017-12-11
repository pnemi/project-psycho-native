import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform
} from 'react-native';



export default class NewGame extends React.Component {
  render() {
    return (
      <View style={styles.myPage}>

      <Text>Omggg</Text>
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
    paddingTop: 64
  },
  textInput: {
    flex: 1
  }
});
