import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker, Item, ScrollView } from 'react-native';
import { Icon, Right } from 'native-base';
import Toolbar from './toolbar';
import SmartPicker from 'react-native-smart-picker';
import { scale, moderateScale } from 'react-native-size-matters';

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected2 : undefined
		};
	}
	onValueChange2(value) {
		this.setState({
			selected2 : value
		});
	}
	render() {
		return (
			<View style={styles.mainView}>
				<Toolbar title='Filter' back={false} rightText={true} navigation={this.props.navigation} />
				<View style={styles.innerRootView}>
					<Text style={styles.statusText}> Status </Text>
					<ScrollView style={{ backgroundColor: '#f7f3f4' }}>
						<SmartPicker
							style={styles.smartPicker}
							selectedValue='SLO'
							label=''
							onValueChange={() => {
								this.handleChange;
							}}>
							<Picker.Item label='Austria' value='A' />
							<Picker.Item label='Czechia' value='CZ' />
							<Picker.Item label='Germany' value='DE' />
							<Picker.Item label='Poland' value='PL' />
							<Picker.Item label='Show All' value='SLO' />
						</SmartPicker>
					</ScrollView>

					<Text style={styles.planText}> Class/Plan </Text>
					<ScrollView style={styles.scrollView}>
						<SmartPicker
							style={styles.smartPicker}
							selectedValue='SLO'
							label=''
							onValueChange={() => {
								this.handleChange;
							}}>
							<Picker.Item label='Austria' value='A' />
							<Picker.Item label='Czechia' value='CZ' />
							<Picker.Item label='Germany' value='DE' />
							<Picker.Item label='Poland' value='PL' />
							<Picker.Item label='Show All' value='SLO' />
						</SmartPicker>
					</ScrollView>

					<Text style={styles.planText}>Invoice Date</Text>
					<ScrollView style={styles.scrollView}>
						<SmartPicker
							style={styles.smartPicker}
							selectedValue='SLO'
							label=''
							onValueChange={() => {
								this.handleChange;
							}}>
							<Picker.Item label='Austria' value='A' />
							<Picker.Item label='Czechia' value='CZ' />
							<Picker.Item label='Germany' value='DE' />
							<Picker.Item label='Poland' value='PL' />
							<Picker.Item label='Show All' value='SLO' />
						</SmartPicker>
					</ScrollView>
				</View>
			</View>
		);
	}

	navigate(screen_name) {
		this.props.navigation.navigate(screen_name);
	}
}

export default Filter;

const styles = StyleSheet.create({
	mainView                  : {
		flex          : 1,
		flexDirection : 'column'
	},
	innerRootView             : { padding: 4 },
	statusText                : { fontSize: 22, marginBottom: 20, marginTop: 20, paddingLeft: 8 },
	smartPicker               : { fontSize: 24 },
	planText                  : { fontSize: 22, marginBottom: 20, marginTop: 20, paddingLeft: 8 },
	container_1               : {
		flex          : 1,
		flexDirection : 'row',
		marginTop     : 74,
		alignItems    : 'center'
	},
	scrollView                : { backgroundColor: '#f7f3f4' },
	container_2               : {
		flex          : 1,
		flexDirection : 'row'
	},
	title_text                : {
		fontSize          : 24,
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
	}
});
