import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image
} from 'react-native';

import NavigationBar from './NavigationBar';

const logo = require('../imgs/logo.png');
const menuClient = require('../imgs/menu_cliente.png');
const menuContact = require('../imgs/menu_contato.png');
const menuEmployee = require('../imgs/menu_empresa.png');
const menuService = require('../imgs/menu_servico.png');

export default class MainScene extends Component {
  render() {
    return (
        <View>
          <StatusBar backgroundColor='#CCC' />
          <NavigationBar />
          <Image source={logo} />
          <Image source={menuClient} />
          <Image source={menuContact} />
          <Image source={menuEmployee} />
          <Image source={menuService} />
        </View>
    );
  }
}
