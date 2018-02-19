import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header } from "react-navigation";
import styles from './styles'        

export default class Tos extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        header: undefined,
        title: "Terms of Service",
        headerTintColor: "#FFFFFF",
        headerStyle: styles.headerStyle
    });

    render() {
        return (
            <View style={styles.mainView}>
                <Text style= {{ fontSize: 20 }}>Terms of Service</Text>
            </View>
        );
    }
}