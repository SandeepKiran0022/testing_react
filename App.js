import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Login from './screens/login';
import Home from './screens/home';
import Customers from './screens/customers';
import Enrolments from './screens/enrolments';
import Invoices from './screens/invoices';
import Filter from './screens/filter';
import CustomerDetails from './screens/customerdetail';
import { Button, Icon, Container, Content, List, ListItem, Footer, FooterTab } from 'native-base';

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigation back={false}/>
            </View>
        );
    }
}

const DrawerNav = new DrawerNavigator({
    home      : {
        screen            : Home,
        navigationOptions : {
            header         : null,
            drawerLockMode :'locked-closed',
			drawerLabel:'TimeSheet',
			drawerIcon: () => (
                <Icon type='FontAwesome' name='bell-o' style={styles.iconStyle} />
              )
        }
    },
    customers : StackNavigator({
        customers        : {
            screen            : Customers,
            navigationOptions : {
                header         : null,
                drawerLockMode : 'locked-closed',
				drawerLabel:'TimeSheet',
			drawerIcon: () => (
                <Icon type='FontAwesome' name='bell-o' style={styles.iconStyle} />
              )
            }
        },
        customer_details : {
            screen            : CustomerDetails,
            navigationOptions : {
                header         : null,
                drawerLockMode : 'locked-closed',
				drawerLabel:'TimeSheet',
			drawerIcon: () => (
                <Icon type='FontAwesome' name='bell-o' style={styles.iconStyle} />
              )
            }
        }
    }),
    invoices  : {
        screen            : Invoices,
        navigationOptions : {
            header         : null,
            drawerLockMode : 'locked-closed',
			drawerLabel:'TimeSheet',
			drawerIcon: () => (
                <Icon type='FontAwesome' name='bell-o' style={styles.iconStyle} />
              )
        }
    },
    filter    : {
        screen            : Filter,
        navigationOptions : {
            header         : null,
            drawerLockMode : 'locked-closed',
			drawerLabel:'TimeSheet',
			drawerIcon: () => (
                <Icon type='FontAwesome' name='bell-o' style={styles.iconStyle} />
              )
        }
    }
});

const Navigation = new StackNavigator({
    login      : {
        screen            : Login,
        navigationOptions : {
            header : null
        }
    },
    enrolments : {
        screen            : Enrolments,
        navigationOptions : {
            header : null
        }
    },
    home       : DrawerNav
});

const styles = StyleSheet.create({
    container : {
        flex            : 1,
        backgroundColor : 'white',
        alignItems      : 'center',
        justifyContent  : 'center',
		color:'grey'
    },
	iconStyle          : {
        color : 'red'
    }
});

export default Navigation;
