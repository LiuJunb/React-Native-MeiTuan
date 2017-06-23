/**
 * Created by Administrator on 2017/6/15 0015.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
} from 'react-native';
import  OrderBar from '../../component/OrderBar';
export default class ShopPage extends Component {

    state = {
        url: 'http://i.meituan.com/topic/scene/1?cevent=imt%2Fhomepage%2Fhomeguide4',
    };

    render(){
        return(
            <View style={{flex:1}}>
                <OrderBar leftName='逛一逛'></OrderBar>
                <WebView
                    ref={'webView'}
                    automaticallyAdjustContentInsets={true}
                    style={{flex:1}}
                    source={{uri:this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    scalesPageToFit={true}
                    startInLoadingState={true}
                />
            </View>
        )
    }



}

