import React, { Component } from "react";
import { Text, 
        View, 
        Button, 
        TextInput, 
        Alert } from "react-native";
import styles from './styles'        

export default class Login extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          name: '',
        }
    }

    static navigationOptions = {
        title: 'React Native App',
        headerStyle: {
          backgroundColor: '#9370DB',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

    CheckNameInput = () => {
        const {name} = this.state;

        if (name === '')
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
                    color="#9370DB"
                    title="Login"
                    onPress={this.CheckNameInput}
                />
            </View>
        );
    }
}