import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
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
                <Text>Terms of Service</Text>
            </View>
        );
    }
}