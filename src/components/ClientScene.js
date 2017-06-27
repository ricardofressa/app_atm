import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import NavigationBar from './NavigationBar';

const logoClient = require('../imgs/detalhe_cliente.png');
const client1 = require('../imgs/cliente1.png');
const client2 = require('../imgs/cliente2.png');

export default class ClientScene extends Component {
  render() {
    return (
        <View>
          <StatusBar backgroundColor='#CCC' />
          <NavigationBar back navigator={this.props.navigator} />

          <View style={styles.header}>
            <Image source={logoClient} />
            <Text style={styles.txtTitle}>Nossos clientes</Text>
          </View>

          <View style={styles.detailClient}>
            <Image source={client1} />
            <Text style={styles.txtDetailClient}>Lorem ipsum dolorem</Text> 
          </View>

          <View style={styles.detailClient}>
            <Image source={client2} />
            <Text style={styles.txtDetailClient}>Lorem ipsum dolorem</Text>
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
  txtDetailClient: {
    fontSize: 18,
    marginLeft: 20
  }
});
