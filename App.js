import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

import NavItems from "./app/NavItems";

export default class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        selectedTab: NavItems[0].key
      };
    }

  render() {

    return (

      <TabBarIOS >
        {NavItems.map(item =>
          <TabBarIOS.Item
            title={item.navTitle}
            selected={this.state.selectedTab === item.key}
            key={item.key}
            onPress={() =>
              this.setState({
                selectedTab: item.key
              })

            } >
            <NavigatorIOS
              style={styles.nav}
              initialRoute={{
                component: item.component,
                title: item.viewTitle
              }} />
          </TabBarIOS.Item>

        )}
      </TabBarIOS>

    );
  }
}

const styles = StyleSheet.create({
  nav: {
     flex: 1
   }
 });
