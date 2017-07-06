import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import NavigationBar from './NavigationBar';

const logoService = require('../imgs/detalhe_servico.png');
const client1 = require('../imgs/cliente1.png');
const client2 = require('../imgs/cliente2.png');

export default class CompanyScene extends Component {
  render() {
    return (
        <View style={{ backgroundColor: '#FFF', flex: 1 }}>
          <StatusBar backgroundColor='#19D1C8' />
          <NavigationBar back navigator={this.props.navigator} background='#19D1C8' />

          <View style={styles.header}>
            <Image source={logoService} />
            <Text style={styles.txtTitle}>Serviços</Text>
          </View>

          <View>
            <Text style={styles.txtDetailService}>-Consultoria</Text>
            <Text style={styles.txtDetailService}>-Processos</Text> 
            <Text style={styles.txtDetailService}>-Acompanhamento de projetos</Text> 
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
    marginLeft: 10,
    marginBottom: 25
  },
  txtDetailService: {
    fontSize: 18,
    marginLeft: 20
  }
});
