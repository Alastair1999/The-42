import React from "react";
import {View,
ScrollView,
Image,
Text,
StyleSheet,
}from "react-native";
import { TopNav, Layout } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from "react-native-table-component";

const content = {
    tableHead: ['Pos', 'Team', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'P'],
    tableTitle: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    premData: [
        ['AFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['CFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['DUFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['HMFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['HFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['KILLIE', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['LFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['MFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['RFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['RCFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['STJ', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['STM', '0', '0', '0', '0', '0', '0', '0', '0'],
    ],

    champTitle: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],

    champData: [
        ['ARB', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['AYR', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['CRFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['DFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['GMFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['HAFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['ICT', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['PTFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['QPFC', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['RRFC', '0', '0', '0', '0', '0', '0', '0', '0'],
    ]
};

export default function LeagueTables(navigation){
    return (
        <Layout>
            <TopNav
                middleContent="League Tables"
            />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.leagueTitle}>
                        <Text style={styles.leagueName}>Cinch Premiership</Text>
                        <Image style={styles.leagueBadges}
                            resizeMode="contain"
                            source={require("../../assets/league-badges/premiership-logo.png")}/>
                    </View>
                            <Table  borderStyle={{borderWidth:1}}>
                                <Row 
                                    data={content.tableHead}
                                    style={styles.head}
                                    textStyle={styles.text}
                                    flexArr={[1,2,1,1,1,1,1,1,1]}
                                />
                                <TableWrapper style={styles.wrapper}>
                                    <Col
                                        data={content.tableTitle}
                                        style={styles.title}
                                        textStyle={styles.text}
                                        heightArr={[28,28]}
                                    />
                                    <Rows 
                                        data={content.premData}
                                        flexArr={[2,1,1,1,1,1,1,1,1]}
                                        style={styles.row}
                                        textStyle={styles.text}
                                    />
                                </TableWrapper>
                            </Table>

                        <View style={styles.leagueTitle}>
                            <Text style={styles.leagueName}>Cinch Championship</Text>
                            <Image style={styles.leagueBadges}
                                resizeMode="contain"
                                source={require("../../assets/league-badges/championship-logo.png")}/>
                        </View>
                                <Table  borderStyle={{borderWidth:1}}>
                                <Row 
                                    data={content.tableHead}
                                    style={styles.head}
                                    textStyle={styles.text}
                                    flexArr={[1,2,1,1,1,1,1,1,1]}
                                />
                            <TableWrapper style={styles.wrapper}>
                                    <Col
                                        data={content.champTitle}
                                        style={styles.title}
                                        textStyle={styles.text}
                                        heightArr={[28,28]}
                                    />
                                    <Rows 
                                        data={content.champData}
                                        flexArr={[2,1,1,1,1,1,1,1,1]}
                                        style={styles.row}
                                        textStyle={styles.text}
                                    />
                                </TableWrapper>
                            </Table>
                        
                            <View style={styles.leagueTitle}>
                            <Text style={styles.leagueName}>Cinch League One</Text>
                            <Image style={styles.leagueBadges}
                                resizeMode="contain"
                                source={require("../../assets/league-badges/league1.png")}/>
                        </View>
                                <Table  borderStyle={{borderWidth:1}}>
                                <Row 
                                    data={content.tableHead}
                                    style={styles.head}
                                    textStyle={styles.text}
                                    flexArr={[1,2,1,1,1,1,1,1,1]}
                                />
                            <TableWrapper style={styles.wrapper}>
                                    <Col
                                        data={content.champTitle}
                                        style={styles.title}
                                        textStyle={styles.text}
                                        heightArr={[28,28]}
                                    />
                                    <Rows 
                                        data={content.champData}
                                        flexArr={[2,1,1,1,1,1,1,1,1]}
                                        style={styles.row}
                                        textStyle={styles.text}
                                    />
                                </TableWrapper>
                            </Table>

                            <View style={styles.leagueTitle}>
                            <Text style={styles.leagueName}>Cinch League Two</Text>
                            <Image style={styles.leagueBadges}
                                resizeMode="contain"
                                source={require("../../assets/league-badges/league-two-logo.png")}/>
                        </View>
                                <Table  borderStyle={{borderWidth:1}}>
                                <Row 
                                    data={content.tableHead}
                                    style={styles.head}
                                    textStyle={styles.text}
                                    flexArr={[1,2,1,1,1,1,1,1,1]}
                                />
                            <TableWrapper style={styles.wrapper}>
                                    <Col
                                        data={content.champTitle}
                                        style={styles.title}
                                        textStyle={styles.text}
                                        heightArr={[28,28]}
                                    />
                                    <Rows 
                                        data={content.champData}
                                        flexArr={[2,1,1,1,1,1,1,1,1]}
                                        style={styles.row}
                                        textStyle={styles.text}
                                    />
                                </TableWrapper>
                            </Table>

                        
                    </View>
                
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //padding: 16,
        //paddingTop: 20,
        backgroundColor: '#fff',
    },
    head: {
        height: 40,
        backgroundColor: 'orange',
    },
    wrapper : {
        flexDirection: 'row',
    },
    title: {
        flex: 1, 
        backgroundColor: '#2ecc71',
    },
    row: {
        height: 28,
    },
    text: {
        textAlign: 'center',
    },

    leagueTitle: {
        flexDirection: 'row',
        textAlign: 'left',
    },

    leagueName: {
        fontSize: 20,
        marginTop: 15,
    },

    leagueBadges: {
        width: 100,
        height: 40,

    },
});


