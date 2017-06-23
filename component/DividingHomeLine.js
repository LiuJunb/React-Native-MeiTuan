/**
 * Created by Administrator on 2017/6/16 0016.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

export default class DividingHomeLine extends Component {
    render(){
        return(
            <View style={styles.viewStyle}></View>
        )
    }
}

var styles =StyleSheet.create({
    viewStyle:{
        height:1,
        backgroundColor:'#dddddd'
    }
});