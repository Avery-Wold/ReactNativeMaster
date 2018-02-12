import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#CCCCCC',
	},
	welcome: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
	}
});