import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import NavigationBar from './NavigationBar';

const logoContact = require('../imgs/detalhe_contato.png');

export default class ContactScene extends Component {
  render() {
    return (
        <View>
          <StatusBar backgroundColor='#CCC' />
          <NavigationBar back navigator={this.props.navigator} />

          <View style={styles.header}>
            <Image source={logoContact} />
            <Text style={styles.txtTitle}>Contato</Text>
          </View>

          <View style={styles.detailClient}>
            <Text style={styles.txtDetailContact}>(12) 1234 - 1234</Text>
            <Text style={styles.txtDetailContact}>(12) 91234 - 1234</Text> 
            <Text style={styles.txtDetailContact}>contato@atmconsultoria.com.br</Text> 
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitle: {
    fontSize: 30,
    color: '#B9C941',
    marginTop: 25,
    marginLeft: 10
  },
  detailClient: {
    padding: 20,
    marginTop: 10
  },
  txtDetailContact: {
    fontSize: 18,
    marginLeft: 20
  }
});
