import React, { Component } from 'react';
import { Animated, Text, View } from 'react-native';
import CharacterInfo from './CharacterInfo';
import styles from './styles';

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

export default class AnimatedCharacterInfo extends Component {
    static navigationOptions = ({navigation, screenProps}) => {
        const {params} = navigation.state;
        return {
            title: params ? params.item + '\'s ' + 'Information' : 'Information',
            headerLeft: null,
            headerTintColor: '#FFFFFF',
            headerStyle: styles.headerStyle,
            gesturesEnabled: true
        }
    };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView>
            <CharacterInfo/>
        </FadeInView>
      </View>
    )
  }
}