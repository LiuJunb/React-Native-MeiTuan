/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Navigator,

} from 'react-native';
//引入MainPage
import  MainPage from './page/Main/MainPage';

export default class MeiTuan extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{ name: 'MainPage', component: MainPage }}
            configureScene={(route) => {
                            return Navigator.SceneConfigs.PushFromRight   ;
                        }}
            renderScene={(route, navigator) => {
                            let Component = route.component;
                            {/*...route.params 把route中params的属性中的所有值传递给MainPage组件，
                            如果没有该属性，那么在以后界面传递数据的时候会失败*/}
                            return <Component  {...route.params} navigator={navigator} />
                        }}
        />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
