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

export default class DividingSmallLine extends Component {
    render(){
        return(
            <View style={styles.view1Style}>
                <View style={styles.view2Style}></View>
            </View>
        )
    }
}

var styles =StyleSheet.create({
    view1Style:{
        height:1,
        backgroundColor:'white'
    },
    view2Style:{
        height:1,
        backgroundColor:'#dddddd',
        marginLeft:10,
    }
});