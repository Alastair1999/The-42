import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SectionList,
    SafeAreaView,
    FlatList,
    StatusBar
} from "react-native";
import { TopNav, Layout } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
    {
        title: "Round 1",
        data: ["Dunfermline vs Alloa", "Falkirk vs Montrose", "Kelty Hearts vs FC Edinburgh", "Peterhead vs Airdrie", "Queen of the South vs Clyde"]
    },
    {
        title: "Round 2",
        data: ["Airdrie vs Falkirk", "Alloa vs Kelty Hearts", "Clyde vs Peterhead", "Montrose vs Queen of the South", "FC Edinburgh vs Dunfermline"]
    },
    {
        title: "Round 3",
        data: ["Alloa vs FC Edinburgh", "Clyde vs Kelty Hearts", "Dunfermline vs Montrose", "Falkirk vs Peterhead", "Queen of the South vs Airdrie"]
    },
];

const Item = ({title, data}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


export default function LeagueOneFixtures ({navigation}) {
    return (
        <Layout>
            <TopNav
                middleContent="Cinch League One Fixtures"
                leftContent={
                    <Ionicons
                      name="chevron-back"
                      size={20}
                    />
                  }
                  leftAction={() => navigation.goBack()}
            />
                <View style={styles.container}>
                    <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item}) => <Item title={item} 
                    />}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                    />
                </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        alignContent: 'center',
        marginHorizontal: 16,
    },

    item: {
        backgroundColor: 'pink',
        marginVertical: 2,
        padding: 5,
    },

    header: {
        fontSize: 26,
        backgroundColor: 'white',
        //padding: 15,
        marginVertical: 10,
    },

    title: {
        fontSize: 20,
    },
})