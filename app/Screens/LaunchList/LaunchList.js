import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    SectionList,
    Button
} from "react-native";
import styles from './styles'
import LaunchService from "../../Services/LaunchService";

export default class LaunchList extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Launch List",
        headerTintColor: "#FFFFFF",
        headerStyle: styles.headerStyle,
    });

    constructor(props) {
        super(props);
        this.state = {
            launchList: [],
            listRefreshing: false
        };
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        var launchData = await LaunchService.getLaunchesAsync();
        this.setState({
            launchList: launchData
        });
    }

    async loadCacheData() {
        var launchData = await LaunchService.getCachedLaunchesAsync();
        this.setState({
            launchList: launchData
        });
    }

    renderSeparator = () => {
        return <View style={styles.separator} />;
    };

    render() {
        const navigation = this.props.screenProps;
        return (
            <View style={styles.mainView}>
                <View style={styles.buttonSpacer} />
                <Button title="Load from Cache" color="#9370DB" onPress={async () => {
                    await this.loadCacheData();
                }}></Button>
                 <View style={styles.buttonSpacer} />
                <Button title="Clear list" color="#9370DB" onPress={async () => {
                    this.setState({
                        launchList: JSON.parse('[]')
                    });
                }}></Button>
                <SectionList
                    style={styles.listView}
                    sections={this.state.launchList}
                    ItemSeparatorComponent={this.renderSeparator}
                    refreshing={this.state.listRefreshing}
                    onRefresh={async () => {
                        await this.loadData();
                    }}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeader}>
                            {section.agency.name}
                        </Text>
                    )}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("ItemDetails", {
                                    detailItem: item
                                });
                            }}
                        >
                            <View style={styles.listRow}>
                                <View style={styles.listRowColumn}>
                                    <Text style={styles.listRowLabel}>
                                        Launch Name:
                                    </Text>
                                    <Text>{item.name}</Text>
                                </View>
                                <View style={styles.listRowColumn}>
                                    <Text style={styles.listRowLabel}>
                                        Locaiton:
                                    </Text>
                                    <Text style={styles.listRowContent}>
                                        {item.location.name}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}