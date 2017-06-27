import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import NavigationBar from './NavigationBar';

const logoCompany = require('../imgs/detalhe_empresa.png');
const client1 = require('../imgs/cliente1.png');
const client2 = require('../imgs/cliente2.png');

export default class CompanyScene extends Component {
  render() {
    return (
        <View>
          <StatusBar backgroundColor='#EC7148' />
          <NavigationBar back navigator={this.props.navigator} />

          <View style={styles.header}>
            <Image source={logoCompany} />
            <Text style={styles.txtTitle}>Empresa</Text>
          </View>

          <View>
            <Text style={styles.txtDetailCompany}>Lorem ipsum dolorem still amet, dolorem sit amet ipsum dolorem sit.</Text> 
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
  txtDetailCompany: {
    fontSize: 18,
    marginLeft: 20
  }
});
