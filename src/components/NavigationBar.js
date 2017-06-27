import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

const imgBack = require('../imgs/btn_voltar.png');

export default class NavigationBar extends Component {
  render() {
	if (this.props.back) {
		return (
  <View style={styles.statusBar}>
  <TouchableHighlight 
	onPress={() => { 
	this.props.navigator.pop(); 
	}} 
  >
	<Image source={imgBack} />
    </TouchableHighlight>
			<Text style={styles.txtTitle}>ATM CONSULTORIA</Text>
	</View>
			);		
  }
    return (
		<View style={styles.statusBar}>
			<Text style={styles.txtTitle}>ATM CONSULTORIA</Text>
		</View>
    );
  }
}

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: '#CCC',
		padding: 10,
		height: 60,
		flexDirection: 'row'
	},
	txtTitle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		color: '#000'
	}
});
