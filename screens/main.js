import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid, Dimensions,Image } from 'react-native';
import Toolbar from './toolbar';
import DrawerLayout from 'react-native-drawer-layout';
import SideMenu from './sidemenu';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { scale } from 'react-native-size-matters';
import { NavigationActions } from 'react-navigation';

class Main extends Component {
   render() {
        var { navigate } = this.props.navigation;
        var navigationView = <SideMenu navigation={this.props.navigation} closeDrawer={this.closeDrawer} />;
        return (
		<View>
		</View>
        );
    }
	    navigate(screen_name) {
        this.props.navigation.navigate(screen_name);
    }
}

export default Main;

const styles = StyleSheet.create({
    container_1               : {
        flex          : 0,
        flexDirection : 'row',
        alignItems    : 'center',
        padding       : scale(8)
    },
    container_2               : {
        flex          : 1,
        flexDirection : 'row',
        padding       : scale(8)
    },
    title_text                : {
        justifyContent    : 'center',
        alignSelf         : 'center',
        textAlign         : 'center',
        textAlignVertical : 'center',
		color:'red'
    },
    touchableOpacityContainer : {
        height         : 183,
        width          : 155,
        flex           : 1,
        justifyContent : 'center',
        alignItems     : 'center',
        borderRadius   : scale(3),
        borderColor    : 'black',
        borderWidth    : 1,
        marginTop      : scale(35),
        marginRight    : scale(25),
        marginLeft     : scale(15)
    },
    iconStyle                 : {
        
        textAlign         : 'center',
        textAlignVertical : 'center',
        alignSelf         : 'center',
    },
    iconContainer             : {
        width           : scale(62),
        height          : scale(62),
        justifyContent  : 'center',
        alignItems      : 'center',
     
        borderRadius    : scale(40)
    },
	  button: {
    height: 36,
    width: 100,
    backgroundColor: 'red',
  },
   image                   : {
        width      : 200,
        height     : 100,
        flex       : 1,
        alignSelf  : 'center',
        resizeMode : 'contain'
    },
});
