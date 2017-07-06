import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import MainScene from './src/components/MainScene';
import ClientScene from './src/components/ClientScene';
import ContactScene from './src/components/ContactScene';
import CompanyScene from './src/components/CompanyScene';
import ServiceScene from './src/components/ServiceScene';


export default class AppAtm extends Component {
  render() {
    return (
        <Navigator
          initialRoute={{ id: 'main' }}
          renderScene={(route, navigator) => {
            /* definir a cena com base na rota */

            switch (route.id) {
              case 'main' :
                return (<MainScene navigator={navigator} />);

              case 'clients' :
                return (<ClientScene navigator={navigator} />);

              case 'contact' :
                return (<ContactScene navigator={navigator} />);

              case 'company' :
                return (<CompanyScene navigator={navigator} />);

              case 'service' :
                return (<ServiceScene navigator={navigator} />);

              default :
                return false;
            }
          }}
        />
    );
  }
}

AppRegistry.registerComponent('app_atm', () => AppAtm);
