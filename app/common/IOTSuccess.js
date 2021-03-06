import React, {
	Component,
} from 'react';

import {
	Navigator,
	ScrollView,
	TouchableOpacity,
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Dimensions,
	Platform,
	ListView,
	Image,
	AsyncStorage,
	TextInput,

} from 'react-native';

import {fnt as fnt} from './fontLib';
import {themeColor as themeColor} from './theme';
var TitleBar = require('./TitleBar');
const dismissKeyboard = require('dismissKeyboard');
const {height, width} = Dimensions.get('window');
var tick = require('../../res/common/selected_contact_messenger_icon.png');


var IOTSuccess = React.createClass( 
{
	getInitialState()
	{
		return {
			
		}
	},

	nextFunction()
	{
		this.props.navigator.push({id: 6});
	},	

	render()
	{
		return (
			<View style = {{flex:1, backgroundColor: '#FFFFFF'}}>
				<TitleBar
					//	leftButton = {require('../../res/common/back.png')}
						title = "Success!"	
						rightText = "Done"
					//	titleImage = {themeColor.windSplash}
					//	rightButton = {require('../res/common/search.png')}
					//	rightButton2 = {require('../res/common/menu.png')}
					//	onLeftButtonPress={this.backFunction}
					//	onRightButtonPress={this.searchModule}
						onRightButton2Press={this.nextFunction}
					//	subText="last seen at 2:10 PM"
					//	isHome = {false}
				/>

				<View style = {styles.border}>
					<View style = {styles.heading}>
						<Image
							source = {tick} 
							style = {styles.imageStyle}
						/>
						<Text style={styles.boldText}>
							Line Configured!
						</Text>
					</View>

					<View style = {styles.inputView}>
						<Text style = {styles.harryStyles}>
							Congratulations! Your new line details have been added. You can now use your profile to manage your services
						</Text>
					</View>
				</View>
			</View>
		);
	},
});

const styles = StyleSheet.create(
{
	border:
	{
		flex: 1,
		borderWidth: 4,
		borderColor: '#ececec',
		borderTopWidth: 0,
	},

	imageStyle:
	{
		marginVertical: 30,
		width: 130,
		height: 130,
		alignSelf: 'center',
	},

	heading:
	{
		//borderColor: '#F2F1EF',
		//borderWidth: 0,
		marginBottom: 20,
	},

	boldText:
	{
		width: width * 0.65,
		fontFamily: fnt.regFont[Platform.OS],
		fontWeight: '400',
		fontSize: 15,
		color: '#666666',
		textAlign: 'center',
		alignSelf: 'center',
		margin: 20,
	},

	harryStyles:
	{
		width: width*0.75,
		textAlign: 'center',
		alignSelf: 'center',
	},

});

module.exports = IOTSuccess