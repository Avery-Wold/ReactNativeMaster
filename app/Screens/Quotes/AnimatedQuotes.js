import React from 'react';
import { Animated, Text, View, ges } from 'react-native';
import Quotes from './Quotes'
import styles from './styles' 

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class AnimatedQuotes extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => {
        const {params} = navigation.state;
        return {
            title: params ? params.item + '\'s ' + 'Quote' : 'Quote',
            header: undefined,
            headerLeft: null,
            headerTintColor: '#FFFFFF',
            headerStyle: styles.headerStyle
        }
    };
  render() {
    return (
      <View 
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      enableGestures={true}>
        <FadeInView>
            <Quotes/>
        </FadeInView>
      </View>
    )
  }
}