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

export default class NearBar extends Component {
    // var option={
    //     leftName:'大地工业区',
    //     playHolder:'找附近吃喝玩乐',
    //     hasRigthView:false
    // }
    render(){
        return(
            <View style={styles.topBarStyle}>
                {/*左*/}
                <View style={styles.view1Style}>
                    <Text style={styles.titleLeftStyle}>{this.props.option.leftName}</Text>
                    <Image source={{uri:'trip_train_vector_submit_order_head_arrow'}}
                           style={styles.arrowStyle}></Image>
                </View>
                {/*中*/}
                <View style={styles.view2Style}>
                    <TextInput
                        placeholder={this.props.option.playHolder}
                        underlineColorAndroid={'transparent'}
                    style={styles.textInputStyle}>
                    </TextInput>
                    <Image source={{uri:'search_ic_suggestion_default'}}
                           style={styles.searchStyle}></Image>
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
        flex:3,
        flexDirection:'row',
        marginLeft:10,

    },
    view2Style:{
        flex:5,
        backgroundColor:'white',
        borderRadius:15,
        height:27,
        marginRight:10,

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
        flex:3,
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

})
