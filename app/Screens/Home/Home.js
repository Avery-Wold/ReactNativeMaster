import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';
import styles from './styles'

export default class Home extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          isVisible: true,
        }
    }

    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return {
            title: params ? params.name + '\'s ' + 'Home' : 'Home',
            headerStyle: {
                backgroundColor: '#9370DB',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerLeft: null,
            headerRight: (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Tos");
                    }}
                >
                <Text style={styles.headerButtonStyle}>Terms</Text>
                </TouchableOpacity>
            )
        }
      };

    ShowHideTextComponentView = () =>{
        if(this.state.isVisible === true)
        {
            this.setState({isVisible: false})
        }
        else
        {
            this.setState({isVisible: true})
        }
        this.setState({
            status: !this.state.isVisible
        })
    }  

    render() {
        const { params } = this.props.navigation.state;
        const name = params ? params.name : null;
        return (
            <View style={styles.container}>
                {
                    this.state.isVisible ? <Text style= {{ fontSize: 25, textAlign: 'center' }}> Welcome </Text> : null
                }

                <Text style={styles.welcome}>{'Good Afternoon, '+ name + '!'}</Text>

                <Button
                    color="#9370DB"
                    title="Show/Hide"
                    onPress={this.ShowHideTextComponentView}
                />

            </View>
        );
    }
}