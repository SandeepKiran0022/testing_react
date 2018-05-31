import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import Toolbar from './toolbar';
import DrawerLayout from 'react-native-drawer-layout';
import SideMenu from './sidemenu';
import { scale } from 'react-native-size-matters';
import Main from './main';
import { Content,Footer,FooterTab,Button,Icon } from 'native-base';

class Home extends Component {
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
		var { navigate } = this.props.navigation;
		var navigationView = <SideMenu navigation={this.props.navigation} closeDrawer={this.closeDrawer} />;
		return (
			<DrawerLayout
				drawerWidth={scale(290)}
				disableGestures={true}
				ref={(_drawer) => (this.drawer = _drawer)}
				drawerPosition={DrawerLayout.positions.Left}
				renderNavigationView={() => navigationView}>
				<Toolbar
					title='Dashboard'
					back={true}
					navigation={this.props.navigation}
					openDrawer={this.openDrawer}
					closeDrawer={this.closeDrawer}
				/>
				<Content>
				
					<Main
						navigation={this.props.navigation}
						openDrawer={this.openDrawer}
						closeDrawer={this.closeDrawer}
					/>
					
				</Content>
				  <Footer style={{left: 0,right: 0,bottom: 0,height: 56,backgroundColor:'white'}}>
                    <FooterTab style={{left: 0,right: 0,bottom: 0,height: 56,backgroundColor:'white'}}>
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
						 <Button onPress={() => this.navigate('DrawerOpen')}>
                            <Icon name='more' style={styles.iconStyle}/>
							<Text style={styles.title_text}>More</Text>
                        </Button>	
                    </FooterTab>
                </Footer>
			</DrawerLayout>
		);
	}

	navigate(screen_name) {
		this.props.navigation.navigate(screen_name);
	}
}

export default Home;

const styles = StyleSheet.create({
	container_1               : {
		flex          : 1,
		flexDirection : 'row',
		marginTop     : 74,
		alignItems    : 'center'
	},
	container_2               : {
		flex          : 1,
		flexDirection : 'row'
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
});
