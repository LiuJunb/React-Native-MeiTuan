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
import  OrderBar from '../../component/OrderBar';
export default class OrderPage extends Component {

    render(){
        return(
            <View>
                <OrderBar leftName='订单'></OrderBar>
            </View>
        )
    }
}


const styles = StyleSheet.create({

})
