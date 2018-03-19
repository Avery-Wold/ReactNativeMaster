import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TextInput,
    Switch,
    DatePickerIOS,
    DatePickerAndroid,
    Platform,
    ScrollView,
    Animated,
    Easing,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";
import styles from './styles'

export default class ItemDetails extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Item Details",
        headerTintColor: "#FFFFFF",
        headerStyle: styles.headerStyle
    });

    constructor(props) {
        super(props);
        this.state = {
            fadeOut: new Animated.Value(1),
            leftPostion: new Animated.Value(1000)
        };
    }

    render() {
        const { params } = this.props.navigation.state;
        const { fadeOut } = this.state;
        const { leftPostion } = this.state;
        return (
            <ScrollView style={styles.mainView}>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Name:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.name}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Window Start:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.windowstart}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Window End:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.windowend}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Net Date:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.net}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Pad Location:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.location.pads[0].name}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Pad Latitude:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.location.pads[0].latitude}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Pad Longitude:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.location.pads[0].longitude}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Agency Name:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.location.pads[0].agencies[0].name}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Country:</Text>
                    <Text style={styles.listRowContent}>
                        {
                            params.detailItem.location.pads[0].agencies[0]
                                .countryCode
                        }
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Rocket:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.rocket.name}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Configuration:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.rocket.configuration}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Family Name:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.rocket.familyname}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Mission Name:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.missions[0].name}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Mission Type:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.missions[0].typeName}
                    </Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.listRowLabel}>Mission Name:</Text>
                    <Text style={styles.listRowContent}>
                        {params.detailItem.missions[0].description}
                    </Text>
                </View>
            </ScrollView>
        );
    }
}