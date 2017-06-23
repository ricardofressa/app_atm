import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import StatusBar from './src/components/StatusBar';


export default class AppAtm extends Component {
  render() {
    return (
        <StatusBar />
    );
  }
}

AppRegistry.registerComponent('app_atm', () => AppAtm);
