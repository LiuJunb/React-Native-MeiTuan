/**
 * Created by Administrator on 2017/6/15 0015.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import  NearBar from '../../component/NearBar';

export default class NearPage extends Component {

    render(){
        //定义参数
        var option={
            leftName:'大地工业区',
            playHolder:'找附近吃喝玩乐',
        }

        return(
            <View style={styles.viewStyle}>
                <NearBar option={option}></NearBar>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'green'
    }
})
