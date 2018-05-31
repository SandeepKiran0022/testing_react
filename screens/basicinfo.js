import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ListView, TouchableHighlight, StyleSheet, ScrollView } from 'react-native';
import Toolbar from './toolbar';
import { Fab, Button, Icon, Container } from 'native-base';
import t from 'tcomb-form-native';


var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
	Email       : t.String, // a required string
	Mobile      : t.Number, // an optional string
	Birthday    : t.String, // an optional string
	MemberSince : t.String, // a required number
	Address     : t.String // a required number
});

var options = {
	auto   : 'placeholders',
	fields : {
		Email       : {
			placeholder : 'Email ID'
		},
		MemberSince : {
			placeholder : 'Member Since'
		},
		Address     : {
			multiline  : true,
			stylesheet : {
				...Form.stylesheet,
				textbox : {
					...Form.stylesheet.textbox,
					normal : {
						...Form.stylesheet.textbox.normal,
						height : 100
					},
					error  : {
						...Form.stylesheet.textbox.error,
						height : 100
					}
				}
			}
		}
	}
};

class BasicInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active : 'true'
		};
	}

	render() {
		return (
			<Container style={styles.container}>
				{/* display */}
				<ScrollView>
					<Form ref='form' type={Person} options={options} />
				</ScrollView>
				<Fab active={this.state.active} direction='up' style={styles.fabStyle} position='bottomRight'>
					<Icon name='edit-2' type='Feather' />
				</Fab>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		flex           : 1,
		marginTop      : 20,
		padding        : 20,
		justifyContent : 'center'
	},
	fabStyle  : {
	
		flex            : 1
	}
});

export default BasicInfo;
