import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { Left, Thumbnail, Tabs, Tab, ScrollableTab, Icon, Right } from 'native-base';
import Toolbar from './toolbar';
import Enrolments from './enrolments';
import Invoices from './invoices';
import BasicInfo from './basicinfo';
import { scale } from 'react-native-size-matters';

class CustomerDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View
                style={{
                    flex          : 1,
                    flexDirection : 'column'
                }}>
                <Toolbar title='Customers' back={false} navigation={this.props.navigation} />
                <View style={styles.mainView}>
                    <View style={styles.innerView} />
                    <Image
                        source={{
                            uri :
                                'https://www.louisvillewebgroup.com/sites/default/files/styles/team-member/public/avatar-circle-blue.png?itok=UmUsBb4f'
                        }}
                        style={styles.image}
                    />
                    <Text style={styles.customerNameText}> Bala Kumar G V </Text>
					<View style={{
                    flex: 0.4,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    }}>
					<Icon type='FontAwesome' name='envelope' style={styles.phoneIcon}>
					<Text style={styles.T}> raghul@gmail.com</Text>
					</Icon>
					<Icon type='FontAwesome' name='phone' style={styles.phoneIcon}>
					<Text style={styles.T}> +91 9444412345</Text>
					</Icon>
					<Icon type='FontAwesome' name='birthday-cake' style={styles.phoneIcon}>
					<Text style={styles.T}> 03  may 1996</Text>
					</Icon>
					<Icon type='FontAwesome' name='location-arrow' style={styles.phoneIcon}>
					<Text style={styles.T}> Pallavaram</Text>
					</Icon>
					</View>
					
					
                    <Tabs renderTabBar={() => <ScrollableTab />} tabBarUnderlineStyle={styles.mainView2}>
                        <Tab
                            heading='Enrolments' headingStyle={styles.Y}
							 tabStyle={styles.mainView2}
                            activeTabStyle={styles.mainView2}
                            activeTextStyle={styles.mainView2}
                            textStyle={styles.mainView2}>
                            <ScrollView>
                                <Enrolments hideHeader={true} hideFooter={true}/>	
                            </ScrollView>
                        </Tab>
                        <Tab
                            heading='Invoices'
                             tabStyle={styles.mainView2}
                            activeTabStyle={styles.mainView2}
                            activeTextStyle={styles.mainView2}
                            textStyle={styles.mainView2}>
                            <ScrollView>
                                <Invoices hideHeader={true} hideFooter={true}/>
                            </ScrollView>
                        </Tab>
                        <Tab
                            heading='Payments'
                             tabStyle={styles.mainView2}
                            activeTabStyle={styles.mainView2}
                            activeTextStyle={styles.mainView2}
                            textStyle={styles.mainView2}>
                            <ScrollView>
                                <Enrolments hideHeader={true} hideFooter={true}/>
                            </ScrollView>
                        </Tab>
                    </Tabs>
                </View>
            </View>
        );
    }

    navigate(screen_name) {
        this.props.navigation.navigate(screen_name);
    }
}

export default CustomerDetails;

const styles = StyleSheet.create({
    container_1               : {
        flex          : 1,
        flexDirection : 'row',
        marginTop     : scale(70),
        alignItems    : 'center'
    },
    mainView                  : { flex: 1, backgroundColor: '#c22d2d', alignItems: 'center' },
	mainView2                  : {  backgroundColor: '#c22d2d'},
    container_2               : {
        flex          : 1,
        flexDirection : 'row'
    },
    title_text                : {
        fontSize          : scale(22),
        justifyContent    : 'center',
        alignSelf         : 'center',
        textAlign         : 'center',
        textAlignVertical : 'center'
    },
    touchableOpacityContainer : {
        height         : 150,
        flex           : 1,
        justifyContent : 'center',
        borderRadius   : 5,
        borderColor    : 'black',
        borderWidth    : 1,
        margin         : 8
    },
    innerView                 : {
        position        : 'absolute',
        marginBottom    : scale(38),
        height          : scale(12),
        width           : scale(12),
        borderRadius    : scale(6),
        marginLeft      : Dimensions.get('screen').width - scale(160),

        borderWidth     : 2,
        alignSelf       : 'flex-start',
        marginTop       : scale(8),
        backgroundColor : 'lightgreen',
        justifyContent  : 'center',
        alignItems      : 'center',
        zIndex          : 1000
    },
    image                     : { width: scale(60), height: scale(60), marginTop: scale(6) },
    customerNameText          : { marginTop: 6, fontSize: scale(14), color: 'white' },
    containerBox              : {
        flexDirection     : 'row',
        borderColor       : 'white',
        borderRightColor  : 'transparent',
        borderLeftColor   : 'transparent',
        borderTopWidth    : 1,
        borderBottomWidth : 1,
        marginTop         : scale(8)
    },
    phoneIcon                 : {
        padding:scale(5),
        fontSize : scale(26),
        color    : 'white'
    },
    smsIcon                   : {
        padding         : scale(10),
        fontSize        : scale(26),
        color           : 'white',
        borderLeftColor : 'white',
        borderLeftWidth : 1
    },
    balanceContainer          : {
        flexDirection   : 'row',
        flex            : 1,
        paddingRight    : scale(12),
        borderLeftColor : 'white',
        borderLeftWidth : 1
    },
    balanceText               : {
        flex       : 1,
        color      : 'white',
        alignSelf  : 'center',
        marginLeft : scale(8),
        color      : 'white',
        fontSize   : scale(20)
    },
    balanceAmountText         : {
        justifyContent : 'center',
        alignSelf      : 'center',
        color          : 'white',
        fontSize       : scale(20)
    },
    tabBarUnderlineStyle      : {  },
    tabStyle                  : { backgroundColor: 'white' },
    tabBarTextActive          : { },
	T:{
		fontSize:scale(12)
	},
	Y:
	{
		color:'white'
	}
});
