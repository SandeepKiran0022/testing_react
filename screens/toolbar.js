import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, ScrollView, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Header, Icon, Left, Right, Button } from 'native-base';
import { scale, moderateScale } from 'react-native-size-matters';

export default class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    includeRefresh() {
        return (
            <Right style={styles.rightView}>
                <Button transparent>
                    <Icon name='search' style={styles.searchIcon} />
                </Button>
                <Button transparent onPress={() => this.navigate('filter')}>
                    <Icon name='ios-funnel-outline' style={styles.filterIcon} />
                </Button>
            </Right>
        );
    }

    includeBackButton() {
        return (
            <Left style={styles.rightView}>
                <Button transparent disabled={true}>
                    {this.props.back ? (
                        <Icon name='menu' style={styles.menuIcon} onPress={() => this.props.openDrawer()} />
                    ) : (
                        <Icon
                            onPress={() => this.props.navigation.goBack()}
                            name='arrow-back'
                            style={styles.menuIcon}
                        />
                    )}
                    <Text style={styles.titleText}>{this.props.title}</Text>
                </Button>
            </Left>
        );
    }

    includeRightText() {
        return (
            <Right>
                <TouchableOpacity style={styles.rightOpacityView} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.applyText}>Apply</Text>
                </TouchableOpacity>
            </Right>
        );
    }

    navigate(screen_name) {
        this.props.navigation.navigate(screen_name);
    }

    render() {
        return (
            <Header style={styles.header}>
                {this.includeBackButton()}
                {this.props.refresh ? this.includeRefresh() : null}
                {this.props.rightText ? this.includeRightText() : null}
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    header           : {
        backgroundColor : 'white'
    },
    rightView        : {
        flex : 1
    },
    searchIcon       : {
        color    : 'grey',
        fontSize : scale(22)
    },
    filterIcon       : {
        color    : 'grey',
        fontSize : scale(22)
    },
    menuIcon         : {
        color    : 'black',
        fontSize : scale(22)
    },
    rightOpacityView : { flex: 1, justifyContent: 'center', marginVertical: 12 },
    titleText        : {
        flex           : 1,
        paddingLeft    : scale(10),
        fontWeight     : 'bold',
        fontSize       : scale(18),
        justifyContent : 'center',
        
    },
    applyText        : {
        flex           : 1,
        fontWeight     : 'bold',
        fontSize       : scale(18),
        textAlign      : 'right',
        justifyContent : 'center',
     
    }
});
