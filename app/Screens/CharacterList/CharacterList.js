import React, { Component } from "react";
import { Text, 
        View, 
        Button,
        FlatList } from "react-native";
import { Header } from "react-navigation";
import styles from './styles'        

export default class CharacterList extends Component {
    constructor(props){
      super(props);
      this.state = {
          FlatListItems: [
            {key: "1", character: 'Ned Stark'},
            {key: "2", character: 'Arya Stark'},
            {key: "3", character: 'Hodor'},
            {key: "4", character: 'Bran Stark'},
            {key: "5", character: 'Petyr Baelish'},
            {key: "6", character: 'Jaime Lannister'},
            {key: "7", character: 'Tyrion Lannister'},
            {key: "8", character: 'Cersei Lannister'},
            {key: "9", character: 'Tywin Lannister'},
            {key: "10", character: 'Danaerys Targaryen'},
            {key: "11", character: 'Olenna Tyrell'}
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
                    renderItem={({item}) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.character)} > {item.character} </Text>}
                />
            </View>
        );
    }
}