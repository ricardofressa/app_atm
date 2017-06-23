import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


export default class StatusBar extends Component {
  render() {
    return (
    	<View style={styles.statusBar}>
    		<Text style={styles.txtTitle}> ATM CONSULTORIA </Text>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: '#CCC',
		padding: 10,
		height: 60
	},
	txtTitle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		color: "#000"
	}
});
