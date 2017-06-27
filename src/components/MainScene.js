import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
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
          <NavigationBar navigator={this.props.navigator} />
          
          <View style={styles.styleView}>
            <Image source={logo} />
          </View>
          
          <View style={styles.styleMenu}>
            <View style={styles.styleMenuGroup}>
            <TouchableHighlight
              onPress={() => {
                this.props.navigator.push({ id: 'b' });
              }}
            >
              <Image source={menuClient} style={styles.imgMenu} />
            </TouchableHighlight>
              <Image source={menuContact} style={styles.imgMenu} />
            </View>
            <View style={styles.styleMenuGroup}>
              <Image source={menuEmployee} style={styles.imgMenu} />
              <Image source={menuService} style={styles.imgMenu} />
            </View>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  styleView: {
    alignItems: 'center',
    marginTop: 30
  },
  styleMenu: {
    alignItems: 'center'
  },
  styleMenuGroup: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});
