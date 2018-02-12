import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from './styles'

export default class Home extends Component {
    render() {
        const { params } = this.props.navigation.state;
        const name = params ? params.name : null;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{JSON.stringify('Welcome, '+ name + '!')}</Text>
            </View>
        );
    }
}