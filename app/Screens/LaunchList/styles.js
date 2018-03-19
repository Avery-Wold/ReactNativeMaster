import { StyleSheet } from 'react-native'

export default StyleSheet.create({
        mainView: {
        flex: 1
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "rgba(247,247,247,1.0)"
    },
    listView: {
        flex: 1
    },
    listRow: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    listRowColumn: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    listRowLabel: {
        paddingRight: 10,
        width: 110
    },
    listRowContent: {
        flex: 1
    },
    headerStyle: {
        backgroundColor: "#9370DB"
    },
    headerButtonStyle: {
        color: "#FFFFFF",
        padding: 20
    },
    separator: {
        height: 1,
        backgroundColor: "#CED0CE",
        paddingLeft: 10,
        paddingRight: 10
    }
});