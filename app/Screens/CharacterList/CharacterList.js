import React, { Component } from "react";
import { Text, 
        View, 
        Button, 
        TextInput, 
        Alert,
        FlatList } from "react-native";
import { Header } from "react-navigation";
import styles from './styles'        

export default class CharacterList extends Component {
    constructor(props){
      super(props);
      this.state = { 
          character: '',
          FlatListItems: [
            {key: 'Ned Stark'},
            {key: 'Arya Stark'},
            {key: 'Hodor'},
            {key: 'Bran Stark'},
            {key: 'Petyr Baelish'},
            {key: 'Jaime Lannister'},
            {key: 'Tyrion Lannister'},
            {key: 'Cersei Lannister'},
            {key: 'Tywin Lannister'},
            {key: 'Danaerys Targaryen'},
            {key: 'Olenna Tyrell'}
        ]}
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: undefined,
        title: "Character List",
        headerTintColor: "#FFFFFF",
        headerStyle: styles.headerStyle
    });

    FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#607D8B",
            }}
          />
        );
      }
    
      GetItem (item) { 
        this.props.navigation.navigate('AnimatedQuotes', {item})  
      }

    render() {
        return (
            <View style={styles.mainView}>
                <FlatList 
                    data={ this.state.FlatListItems } 
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem={({item}) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text>}
                />
            </View>
        );
    }
}