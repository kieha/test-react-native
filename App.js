import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={{paddingTop: 10}}>
        Hello {this.props.name}!
      </Text>
    )
  }
}

class App extends Component {
  render() {
    let pic = {
      uri: "https://static.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg"
    };

    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name="Njeri"/>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
