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
} from 'react-native';

export default class TopBar extends Component {

    render(){
        return(
            <View style={styles.topBarStyle}>
                {/*左*/}
                <View style={styles.view1Style}>
                    <Text style={styles.titleLeftStyle}>广州</Text>
                    <Image source={{uri:'trip_train_vector_submit_order_head_arrow'}}
                           style={styles.arrowStyle}></Image>
                </View>
                {/*中*/}
                <View style={styles.view2Style}>
                    <TextInput
                        placeholder={'糕点'}
                        underlineColorAndroid={'transparent'}
                    style={styles.textInputStyle}>
                    </TextInput>
                    <Image source={{uri:'search_ic_suggestion_default'}}
                           style={styles.searchStyle}></Image>
                </View>
                {/*右*/}
                <View style={styles.view3Style}>
                    <Image source={{uri:'scan'}} style={styles.scanStyle}></Image>
                    <Text style={styles.titleLeftStyle} >扫码</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    /*头部导航条背景*/
    topBarStyle:{
        flexDirection:'row',
        height:40,
        backgroundColor:'#06C1AE',
        alignItems:'center'
    },
    /*左边箭头*/
    arrowStyle:{
        width:13,
        height:9,
        marginLeft:8,
        marginRight:1,
        marginTop:6
    },
    view1Style:{
        flex:1,
        flexDirection:'row',
        marginLeft:10
    },
    view2Style:{
        flex:3,
        backgroundColor:'white',
        borderRadius:15,
        height:27
    },
    /*输入框*/
    textInputStyle:{
        paddingTop:0,
        paddingBottom:0,
        borderWidth:0,
        height:28,
        fontSize:12,
        paddingLeft:30,
    },
    view3Style:{
        flex:1,
        flexDirection:'row'
    },
    /*文字颜色*/
    titleLeftStyle:{
        color:'white'
    },
    /*收索框*/
    searchStyle:{
        width:18,
        height:18,
        position:'absolute',
        top:4,
        left:10,
    },
    /*扫码图*/
    scanStyle:{
        width:19,
        height:19,
        marginLeft:5,
        marginRight:2
    }
})
