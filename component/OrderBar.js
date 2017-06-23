/**
 * Created by Administrator on 2017/6/15 0015.
 */
/**
 * Created by Administrator on 2017/6/15 0015.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class OrderBar extends Component {


    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>this.onGoBack()}>
                <View style={styles.topBarStyle}>
                    {this.renderArrow()}
                    {/*左*/}
                    <View style={styles.view1Style}>
                        <Text style={styles.titleLeftStyle}>{this.props.leftName}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    renderArrow(){
        var hasArrow=this.props.hasArrow;
        if( hasArrow!=null && hasArrow ){
            return(
                <Image style={styles.leftImageStyle} source={{uri:'trip_flight_ic_home_page_back_bt'}}></Image>
            )
        }
    }

    onGoBack(){
       var navigator= this.props.navigator;
        var routes=navigator.getCurrentRoutes();
        if(routes.length>1){
            navigator.pop();
        }
    }
}



const styles = StyleSheet.create({
    /*头部导航条背景*/
    topBarStyle:{
        flexDirection:'row',
        height:40,
        backgroundColor:'#06C1AE',
        //垂直居中
        alignItems:'center',
        //底部边界
        borderBottomWidth:1,
        borderBottomColor:'#cdcdcd'
    },
    /*文字颜色*/
    titleLeftStyle:{
        color:'white',
        paddingLeft:10,
    },

    leftImageStyle:{
        width:13,
        height:15,
        marginLeft:5
    }
})
