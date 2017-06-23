/**
 * Created by Administrator on 2017/6/16 0016.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class MineItemView extends Component {
    render(){
        return(

            <View style={styles.viewOutStyle}>
                    {/*左边*/}
                    <View style={styles.viewStyle}>
                        <Image style={styles.imageLeftStyle}
                               source={{uri:this.props.option.icon}}></Image>
                        <Text style={styles.textLeftStyle} >{this.props.option.titleLeft}</Text>
                    </View>
                    {/*右边*/}
                    <View style={styles.viewStyle}>
                        <Text style={styles.textRightStyle} >{this.props.option.titleRight}</Text>
                        <Image style={styles.imageRightStyle}
                               source={{uri:'trip_travel__lion_more_date_icon'}}></Image>
                    </View>
            </View>
        )
    }
}

var styles =StyleSheet.create({
    /*view样式*/
    viewOutStyle:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        height:35,
    },
    viewStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
    /*图片样式*/
    imageLeftStyle:{
        width:18,
        height:18,
        marginLeft:10,
        marginRight:10,

    },
    imageRightStyle:{
        width:9,
        height:12,
        marginRight:10,
        marginLeft:3,
    },
    /*文字样式*/
    textLeftStyle:{
        fontSize:14,
        color:'#4E4E4E',
    },
    textRightStyle:{
        fontSize:12,
        color:'#9F9F9F',
    },


});