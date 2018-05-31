import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, Body, Input, Item, Icon, Button } from 'native-base';
import { scale } from 'react-native-size-matters';
class Login extends Component {
    render() {
        return (
            <Container style={styles.mainContainer}>
                <View style={styles.innerView}>
                    <Image
                        source={require('../assets/imgs/ontro_logo.png')}
                        style={styles.image}
                        resizeMode='contain'
                    />
                    <Item rounded style={styles.emailItem}>
                        <Icon name='mail' size={22} color={'black'} />
                        <Input placeholder='Email' />
                    </Item>
                    <Item rounded style={styles.passwordItem}>
                        <Icon name='lock' size={22} color={'black'} />
                        <Input placeholder='Password' />
                    </Item>
                    <Button block style={styles.button} onPress={() => this.props.navigation.navigate('home')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>

                    <TouchableOpacity style={styles.touchableOpacityView}>
                        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.touchableOpacityNewUser}
                        onPress={() => this.props.navigation.navigate('home')}>
                        <Text style={styles.newUserText}>
                            New User ?
                            <Text style={styles.signupText}> Signup</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer           : {
        flex            : 1,
        alignItems      : 'center',
        backgroundColor : '#E9EBF1'
    },
    innerView               : {
        flex           : 1,
        alignItems     : 'center',
        justifyContent : 'center',
        marginTop      : 57,
        marginLeft     : 75,
        marginRight    : 74
    },
    emailItem               : {
        paddingLeft  : 12,
        borderColor  : 'black',
        borderWidth  : 1,
        width        : 284,
        height       : 42,
        marginTop    : 46,
        borderRadius : 5,
        marginLeft   : 46,
        marginRight  : 45
    },
    passwordItem            : {
        paddingLeft  : 12,
        borderColor  : 'black',
        borderWidth  : 1,
        marginTop    : 36,
        borderRadius : 5,
        width        : 284,
        height       : 42,
        marginLeft   : 46,
        marginRight  : 45
    },
    buttonText              : {
        color      : 'white',
        fontSize   : 22,
        fontWeight : '400',
        flex       : 1,
        textAlign  : 'center'
    },
    newUserText             : {
        fontSize          : 18,
        flex              : 1,
        marginBottom      : 16,
        textAlignVertical : 'bottom'
    },
    signupText              : {
        color        : '#c22d2d',
        flex         : 1,
        fontSize     : 18,
        marginBottom : 10,
        marginTop    : 107
    },
    touchableOpacityView    : {
        flex      : 1,
        marginTop : 10,
        alignSelf : 'flex-end'
    },
    touchableOpacityNewUser : {
        flex : 1
    },
    forgotPasswordText      : {
        fontSize    : scale(14),
        marginTop   : 10,
        marginRight : 47,
        textAlign   : 'right'
    },
    image                   : {
        width      : 200,
        height     : 100,
        flex       : 1,
        alignSelf  : 'center',
        resizeMode : 'contain'
    },
    inputContainer          : {
        flex       : 1,
        paddingTop : 24
    },
    inputItem               : {
        borderTopColor    : '#000',
        borderWidth       : 5,
        width             : Dimensions.get('screen').width - 45,
        borderBottomColor : 'transparent'
    },
    button                  : {
        backgroundColor : '#c22d2d',
        height          : 42,
        marginTop       : 36,
        borderRadius    : 5,
        width           : 284,
        height          : 42,
        alignSelf       : 'center'
    }
});

export default Login;
