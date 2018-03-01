import React, { Component } from "react";
import { Text, 
        View, 
        Button, 
        TextInput, 
        Alert,
        ScrollView } from "react-native";
import { Header } from "react-navigation";
import styles from "./styles";

export default class CharacterInfo extends Component {
    static navigationOptions = ({navigation, screenProps}) => {
        const {params} = navigation.state;
        return {
            title: params ? params.item + '\'s ' + 'Quote' : 'Quote',
            header: undefined,
            headerTintColor: '#FFFFFF',
            headerStyle: styles.headerStyle
        }
    };

    render() {
        return (
            <ScrollView style={styles.mainView}>
                <Text style= {{ fontSize: 20, padding: 20 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut sem viverra aliquet eget sit amet. Nulla aliquet porttitor lacus 
                    luctus accumsan tortor posuere. Lectus arcu bibendum at varius vel 
                    pharetra. 
                    Nibh sit amet commodo nulla facilisi nullam. Molestie a 
                    iaculis at erat pellentesque adipiscing commodo elit at. Eu augue 
                    ut lectus arcu bibendum at varius vel pharetra. Risus viverra 
                    adipiscing at in tellus integer. Ultrices eros in cursus turpis. 
                    Ipsum a arcu cursus vitae congue. Amet mauris commodo quis imperdiet 
                    massa tincidunt. Nulla porttitor massa id neque aliquam vestibulum. 
                    Tempus urna et pharetra pharetra. Eget nunc scelerisque viverra mauris
                    in aliquam sem fringilla. Odio euismod lacinia at quis risus sed. 
                    Facilisis sed odio morbi quis commodo odio aenean sed. Id porta nibh 
                    venenatis cras sed. Congue eu consequat ac felis donec.
                 </Text>
                 <Text style= {{ fontSize: 20, padding: 20 }}>
                    Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. 
                    Sem integer vitae justo eget magna fermentum. Mattis molestie a iaculis 
                    at. Erat pellentesque adipiscing commodo elit. Velit ut tortor pretium 
                    viverra suspendisse potenti nullam ac tortor. Eget aliquet nibh praesent 
                    tristique magna sit. Pellentesque habitant morbi tristique senectus et 
                    netus et malesuada. 
                    In cursus turpis massa tincidunt dui. Elit eget 
                    gravida cum sociis natoque penatibus. Turpis egestas sed tempus urna et 
                    pharetra pharetra massa. Morbi enim nunc faucibus a pellentesque sit amet. 
                    Nisl tincidunt eget nullam non nisi est sit amet. Felis eget nunc lobortis 
                    mattis aliquam faucibus purus in. Quam adipiscing vitae proin sagittis.
                 </Text>
            </ScrollView>
        );
    }
}