import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ListView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Toolbar from './toolbar';
import { Button, Icon, Container, Content, List, ListItem, Footer, FooterTab } from 'native-base';
import { scale } from 'react-native-size-matters';
import { NavigationActions } from 'react-navigation';

class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.topContainer}>
                        <View style={styles.innerView}>
                            <Image
                                source={{
                                    uri :
                                        'https://www.louisvillewebgroup.com/sites/default/files/styles/team-member/public/avatar-circle-blue.png?itok=UmUsBb4f'
                                }}
                                style={styles.image}
                            />
                            <View>
                                <Text style={styles.innerText}>abc</Text>
                                <Text style={styles.innerTextEmail} notes>
                                    {' '}
                                    abc@ontroapp.com{' '}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <ScrollView>
                            <List style={styles.list}>
                                <ListItem style={styles.listItem}>
                                    <TouchableOpacity style={styles.drawerItem}>
                                        <Button iconLeft transparent primary>
                                            <Icon type='FontAwesome' name='bell-o' style={styles.iconStyle} />
                                            <Text style={styles.listItemText}>Notifications</Text>
                                        </Button>
                                    </TouchableOpacity>
                                </ListItem>

                                <ListItem style={styles.listItem}>
                                    <TouchableOpacity style={styles.drawerItem}>
                                        <Button iconLeft transparent primary>
                                            <Icon type='FontAwesome' name='flag-o' style={styles.iconStyle} />
                                            <Text style={styles.listItemText}>Trainers</Text>
                                        </Button>
                                    </TouchableOpacity>
                                </ListItem>

                                <ListItem style={styles.listItem}>
                                    <TouchableOpacity style={styles.drawerItem}>
                                        <Button iconLeft transparent primary>
                                            <Icon type='FontAwesome' name='suitcase' style={styles.iconStyle} />
                                            <Text style={styles.listItemText}>Class/Plan</Text>
                                        </Button>
                                    </TouchableOpacity>
                                </ListItem>

                                <ListItem style={styles.listItem} onPress={() => this.navigate('customers')}>
                                    <TouchableOpacity style={styles.drawerItem}>
                                        <Button iconLeft transparent primary>
                                            <Icon type='Feather' name='user' style={styles.iconStyle} />
                                            <Text style={styles.listItemText}>Customers</Text>
                                        </Button>
                                    </TouchableOpacity>
                                </ListItem>

                                <ListItem style={styles.listItem} onPress={() => this.navigate('invoices')}>
                                    <TouchableOpacity style={styles.drawerItem}>
                                        <Button iconLeft transparent primary>
                                            <Icon type='FontAwesome' name='file-text-o' style={styles.iconStyle} />
                                            <Text style={styles.listItemText}>Invoices</Text>
                                        </Button>
                                    </TouchableOpacity>
                                </ListItem>

                                <ListItem style={styles.listItem} onPress={() => this.navigate('enrolments')}>
                                    <TouchableOpacity style={styles.drawerItem}>
                                        <Button iconLeft transparent primary>
                                            <Icon type='FontAwesome' name='suitcase' style={styles.iconStyle} />
                                            <Text style={styles.listItemText}>Enrolments</Text>
                                        </Button>
                                    </TouchableOpacity>
                                </ListItem>

                                <ListItem noBorder={true}>
                                    <TouchableOpacity style={styles.drawerItem}>
                                        <Button iconLeft transparent primary>
                                            <Icon type='MaterialIcons' name='add' style={styles.iconStyle} />
                                            <Text style={styles.listItemText}>More</Text>
                                        </Button>
                                    </TouchableOpacity>
                                </ListItem>
                            </List>
                        </ScrollView>
                    </View>
                </Content>

                <Footer style={styles.footerStyle}>
                    <FooterTab style={styles.footerStyle}>
                        <TouchableOpacity style={styles.drawerItem}>
                            <Button transparent primary onPress={() => this.reset('login')}>
                                <Text style={styles.listItemTextLogout}>LOGOUT</Text>
                            </Button>
                        </TouchableOpacity>
                    </FooterTab>
                </Footer>
				
            </Container>
			
        );
    }

    reset(route) {
        const { navigate } = this.props.navigation;
        const resetAction = NavigationActions.reset({
            index   : 0,
            actions : [ NavigationActions.navigate({ routeName: route }) ],
            key     : null // THIS LINE
        });
        this.props.navigation.dispatch(resetAction);
    }

    navigate(routeName) {
        this.props.closeDrawer();
        this.props.navigation.navigate(routeName);
    }
}

const styles = StyleSheet.create({
    container          : {
        flex            : 1,
      
        justifyContent  : 'center'
    },
    iconStyle          : {
        color : 'grey'
    },
    topContainer       : {
        flex            : 1,
        height          : Dimensions.get('screen').height * 0.22,
       
    },
    image              : { width: 70, height: 70, marginTop: 8 },
    innerView          : {
        flex           : 1,
        flexDirection  : 'row',
        justifyContent : 'flex-start',
        alignItems     : 'center',
        marginLeft     : scale(44)
    },
    list               : {
        paddingRight : scale(18)
    },
    listItem           : {
        borderBottomColor : 'grey'
    },
    innerText          : {
        textAlign   : 'center',
        alignSelf   : 'center',
        paddingLeft : scale(12),
        color       : 'white',
        fontSize    : scale(18)
    },
    innerTextEmail     : {
        textAlign   : 'center',
        alignSelf   : 'center',
        paddingLeft : scale(12),
        color       : 'white',
        fontSize    : scale(12)
    },
    listItemText       : {
        paddingLeft : scale(32),
        textAlign   : 'center',
        color       : 'lightgrey',
        fontSize    : scale(14)
    },
    listItemTextLogout : {
        alignSelf      : 'center',
        width          : scale(290),
        justifyContent : 'center',
        textAlign      : 'center',
        color          : 'lightgrey',
        fontSize       : scale(14)
    },
    footerStyle        : {
       
    }
});

export default SideMenu;
