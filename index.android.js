import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import MainScene from './src/components/MainScene';


export default class AppAtm extends Component {
  render() {
    return (
        <MainScene />
    );
  }
}

AppRegistry.registerComponent('app_atm', () => AppAtm);
