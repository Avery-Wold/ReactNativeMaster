import React, { Component } from "react";
import { StyleSheet, 
        Text, 
        View, 
        Button, 
        TextInput, 
        Alert } from "react-native";

export default class Login extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          name: '',
        }
    }

    CheckNameInput = () => {
        const {name} = this.state;

        if (name == '')
        {
            Alert.alert("Please enter your name!");
        }
        else
        {
            this.props.navigation.navigate('Home', {name: this.state.name})
        }
    }

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.topSpacer} />
                <Text style={styles.name}>Name:</Text>
                <TextInput style={styles.name}
                    placeholder="Enter your name"
                    onChangeText={(text) => this.setState({name:text})}
                    value={this.state.name} />
                <View style={styles.buttonSpacer} />
                <Button
                    color="#4B0082"
                    title="Login"
                    onPress={this.CheckNameInput}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#CCCCCC"
    },
    topSpacer: {
        flex: 0.3
    },
    buttonSpacer: {
        flex: 0.2
    },
	name: {
		fontSize: 20,
		margin: 10,
	}
});