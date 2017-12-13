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

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }
  
  componentDidMount() {
   this.timerID = setInterval(
     () => this.tick(),
     1000
   );
 }

 componentWillUnmount() {
   clearInterval(this.timerID);
 }

 tick() {
   this.setState({
     date: new Date()
   });
 }

  render() {
    return (
      <Text style={{paddingBottom: 10}}>{this.state.date.toLocaleTimeString()}</Text>
    );
  }
}

class App extends Component {
  render() {
    let pic = {
      uri: "https://static.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg"
    };

    return (
      <View style={styles.container}>
        <Clock />
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
