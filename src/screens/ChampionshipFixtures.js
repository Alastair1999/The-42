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
        title: "Round 1 - 30/07",
        data: ["Ayr vs Arbroath", "Cove Rangers vs Raith", "Dundee vs Partick Thistle", "Hamilton vs Morton", "Inverness vs Queen's Park"]
    },
    {
        title: "Round 2 - 05/08-06/08",
        data: ["Queen's Park vs Ayr", "Arbroath vs Inverness", "Morton vs Cove Rangers", "Partick Thistle vs Hamilton", "Raith vs Dundee"]
    },
    {
        title: "Round 3 - 12/08-13/08",
        data: ["Dundee vs Arbroath", "Ayr vs Hamilton", "Inveness vs Cove Rangers", "Queen's Park vs Partick Thistle", "Raith vs Morton"]
    },
    {
        title: "Round 4 - 19/08-20/08",
        data: ["Partick Thistle vs Raith", "Inverness vs Morton", "Queen's Park vs Cove Rangers", "Hamilton vs Arbroath", "Ayr vs Dundee"]
    },
    {
        title: "Round 5 - 26/08-27/08",
        data: ["Ayr vs Dundee", "Hamilton vs Arbroath", "Inverness vs Morton", "Partick Thistle vs Raith", "Queen's Park vs Cove Rangers"]
    },
    {
        title: "Round 6 - 03/09",
        data: ["Arbroath vs Partick Thistle", "Cove Rangers vs Hamilton", "Dundee vs Queen's Park", "Morton vs Ayr", "Raith vs Inverness"]
    },
    {
        title: "Round 7 - 09/09 to 10/09",
        data: ["Cove Rangers vs Dundee", "Arbroath vs Raith", "Ayr vs Partick Thistle", "Inverness vs Hamilton", "Queen's Park vs Morton"]
    },
    {
        title: "Round 8 - 17/09",
        data: ["Dundee vs Inverness", "Hamilton vs Queen's Park", "Morton vs Arbroath", "Partick Thistle vs Cove Rangers", "Raith vs Ayr"]
    },
];

const Item = ({title, data}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


export default function ChampionshipFixtures ({navigation}) {
    return (
        <Layout>
            <TopNav
                middleContent="Cinch Championship Fixtures"
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