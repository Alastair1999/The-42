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
        title:"Round 1 - 30/07 to 31/07",
        data: ["Livingston vs Rangers ", "St Johnstone vs Hibernian ", "Kilmarnock vs Dundee United", "Hearts vs Ross County", "St Mirren vs Motherwell", "Celtic vs Aberdeen"]
    },
    {
        title:"Round 2 - 06/08 to 07/08",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 3 - 13/08 to 14/08",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 4 - 20/08 to 21/08",
        data: ["Hibs vs Rangers ", "Dundee Utd vs St Mirren ", "Motherwell vs Livingston", "Ross County vs Kilmarnock", "St Johnstone vs Aberdeen", "Celtic vs Hearts"]
    },
    {
        title:"Round 5 - 27/08 to 28/08",
        data: ["Aberdeen vs Livingston ", "Kilmarnock vs Motherwell", "Rangers vs Ross County", "St Mirren vs Hibs", "Dundee Utd vs Celtic", "Hearts vs St Johnstone"]
    },
    {
        title:"Round 6 - 03/09 to 04/09",
        data: ["Celtic vs Rangers ", "Hibs vs Kilmarnock", "Motherwell vs Dundee United ", "Livingston vs Hearts", "Ross County vs Aberdeen", "St Johnstone vs St Mirren"]
    },
    {
        title:"Round 7 - 10/09 to 11/09",
        data: ["Aberdeen vs Rangers ", "Celtic vs Livingston ", "Dundee Utd vs Hibernian", "Ross County vs Motherwell", "Kilmarnock vs St Johnstone", "Hearts vs St Mirren"]
    },
    {
        title:"Round 8 - 17/09 to 18/09",
        data: ["Hibs vs Aberdeen ", "Livingston vs Kilmarnock ", "Motherwell vs Hearts", "Rangers vs Dundee Utd", "St Johnstone vs Ross County", "St Mirren vs Celtic"]
    },
    {
        title:"Round 9 - 01/10 to 02/10",
        data: ["Aberdeen vs Kilmarnock ", "Celtic vs Motherwell ", "St Mirren vs Livingston", "Ross County vs Hibs", "Hearts vs Rangers", "Dundee Utd vs St Johnstone"]
    },
    {
        title:"Round 10 - 08/10 to 09/10",
        data: ["Dundee Utd vs Aberdeen ", "Hibs vs Motherwell ", "Kilmarnock vs Hearts", "Livingston vs Ross County", "Rangers vs St Mirren", "St Johnstone vs Celtic"]
    },
    {
        title:"Round 11 - 15/10 to 16/10",
        data: ["Aberdeen vs Hearts ", "Celtic vs Hibs ", "Livingston vs St Johnstone", "Ross County vs Dundee Utd", "St Mirren vs Kilmarnock", "Motherwell vs Rangers"]
    },
    {
        title:"Round 12 - 22/10 to 23/10",
        data: ["Hearts vs Celtic ", "Hibs vs St Johnstone ", "Rangers vs Livingston", "Kilmarnock vs Ross County", "Motherwell vs Aberdeen", "St Mirren vs Dundee Utd"]
    },
    {
        title:"Round 13 - 29/10 to 30/10",
        data: ["St Johnstone vs Kilmarnock", "Ross County vs Hearts ", "Rangers vs Aberdeen", "Livingston vs Celtic", "Hibs vs St Mirren", "Dundee Utd vs Motherwell"]
    },
    {
        title:"Round 14 - 05/11 to 06/11",
        data: ["Aberdeen vs Hibernian", "Hearts vs Motherwell", "Ross County vs St Mirren ", "St Johnstone vs Rangers", "Ross County vs Celtic", "Celtic vs Dundee Utd"]
    },
    {
        title:"Round 15",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 16",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 17",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 18",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 19",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 20",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 21",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 22",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 23",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 24",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 25",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 26",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 27",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 28",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 29",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 30",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 31",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 32",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },

];

const Item = ({title, data}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


export default function PremiershipFixtures ({navigation}) {
    return (
        <Layout>
            <TopNav
                middleContent="Cinch Premiership Fixtures"
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
        marginVertical: 10,
    },

    title: {
        fontSize: 20,
    },
})
