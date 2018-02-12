import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from './styles'

export default class Home extends Component {
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return {
            title: params ? params.name + '\'s ' + 'Home' : 'Home',
            headerStyle: {
            backgroundColor: '#4B0082',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }
      };

    render() {
        const { params } = this.props.navigation.state;
        const name = params ? params.name : null;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{'Welcome, '+ name + '!'}</Text>
            </View>
        );
    }
}