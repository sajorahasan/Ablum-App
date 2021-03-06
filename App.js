/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import {displayName as appName} from './app.json';

export default class App extends Component {
  render() {
    return (
      <View style = {{ flex: 1, marginBottom: 20 }}>
        <Header headerText = {appName} />
        <AlbumList />
      </View>
    );
  }
}
