import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import Toolbar from './toolbar';
import {
    Container,
    Button,
    Header,
    Content,
    Card,
    CardItem,
    Icon,
    Body,
    Item,
    Input,
    Left,
    Right,
    Thumbnail,
    List,
    ListItem,
	Footer, FooterTab
} from 'native-base';
import { scale, moderateScale } from 'react-native-size-matters';
import DrawerLayout from 'react-native-drawer-layout';
import SideMenu from './sidemenu';

class Invoices extends Component {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    closeDrawer() {
        this.drawer.closeDrawer();
    }

    render() {
        var navigationView = <SideMenu navigation={this.props.navigation} closeDrawer={this.closeDrawer} />;
        return (
            <DrawerLayout
                drawerWidth={scale(290)}
                disableGestures={true}
                ref={(_drawer) => (this.drawer = _drawer)}
                drawerPosition={DrawerLayout.positions.Left}
                renderNavigationView={() => navigationView}>
                {this.props.hideHeader ? null : (
                    <Toolbar
                        title='Invoices'
                        back={true}
                        navigation={this.props.navigation}
                        openDrawer={this.openDrawer}
                        closeDrawer={this.closeDrawer}
                    />
                )}
                <Content>
                    <List style={styles.list}>
                        {this.renderListItem(1)}
                        {this.renderListItem(2)}
                        {this.renderListItem(1)}
                        {this.renderListItem(3)}
                        {this.renderListItem(1)}
                        {this.renderListItem(2)}
                        {this.renderListItem(1)}
                        {this.renderListItem(3)}
                        {this.renderListItem(1)}
                        {this.renderListItem(2)}
                        {this.renderListItem(1)}
                        {this.renderListItem(3)}
                        {this.renderListItem(1)}
                    </List>
                </Content>
				        {this.props.hideHeader ? null :(<Footer style={{left: 0,right: 0,bottom: 0,height: 56}}>
                    <FooterTab style={{left: 0,right: 0,bottom: 0,height: 56,backgroundColor:"#FFF"}}>
                        <Button
						  onPress={() => this.navigate('home')}
						  >
                            <Icon name='ios-apps-outline' style={styles.iconStyle}/>
							<Text style={styles.title_text}>Home</Text>
                        </Button>
                        <Button  onPress={() => this.navigate('customers')}>
                            <Icon name='ios-camera-outline' style={styles.iconStyle}/>
							<Text style={styles.title_text}>Customers</Text>
                        </Button>
                    
                        <Button  onPress={() => this.navigate('invoices')}>
                            <Icon name='ios-contact-outline' style={styles.iconStyle} />
							<Text style={styles.title_text}>Invoice</Text>
                        </Button>
						    <Button  onPress={() => this.navigate('enrolments')}>
                            <Icon name='ios-compass' style={styles.iconStyle}/>
							<Text style={styles.title_text}>Enrollments</Text>
                        </Button>
                    </FooterTab>
						</Footer>)}
            </DrawerLayout>
        );
		
	    
    }
	navigate(screen_name) {
        this.props.navigation.navigate(screen_name);
    }

    renderListItem(paystatus) {
        return (
            <ListItem>
                <Left style={styles.listItemLeft}>
                    <Text style={styles.nameText}>Kilgore Trout</Text>
                    <Text note>INV -0001</Text>
                    <Text note>Feb 6 2018</Text>
                </Left>

                <Right>
                    <Text style={styles.amountText}>$ 4000</Text>

                    {paystatus === 1 ? (
                        <Text note style={styles.payStatusActive}>
                            Paid
                        </Text>
                    ) : null}
                    {paystatus === 2 ? (
                        <Text note style={styles.payStatusFuture}>
                            Partially Paid
                        </Text>
                    ) : null}
                    {paystatus === 3 ? (
                        <Text note style={styles.payStatusEnded}>
                            Unpaid
                        </Text>
                    ) : null}
                </Right>
            </ListItem>
        );
    }
}

export default Invoices;
const styles = StyleSheet.create({
    list            : {
        width : Dimensions.get('screen').width - 8
    },	
		  title_text                : {
        justifyContent    : 'center',
        alignSelf         : 'center',
        textAlign         : 'center',
        textAlignVertical : 'center',
		color:'grey'
    },
	    iconStyle                 : {
        textAlign         : 'center',
        textAlignVertical : 'center',
        alignSelf         : 'center',
		color:'grey'
    },
    listItemLeft    : { flexDirection: 'column' },
    nameText        : {
        fontSize : scale(18)
    },
    amountText      : {
        fontSize     : scale(18),
        marginBottom : 8
    },
    payStatusActive : { color: 'darkgreen', fontSize: 11 },
    payStatusEnded  : { color: 'red', fontSize: 11 },
    payStatusFuture : { color: 'darkorange', fontSize: 11 }
});
