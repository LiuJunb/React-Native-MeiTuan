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

export default class MineBar extends Component {
    render(){
        return(
            <View style={styles.topBarStyle}>
                {/*渲染每一个Item*/}
                {this.renderIcons()}
            </View>
        )
    }
    renderIcons(){ /***渲染每一个icon*/
        var Icons=this.props.Icons;
        var iconItem=[];
        for(var i=0;i<Icons.length;i++){
            var image=Icons[i];
            if(image.hasMsg){
                iconItem.push(
                    <View key={i} style={styles.viewStyle}>
                        <Image source={{uri:image.icon}}  style={styles.imageStyle}></Image>
                        <Text style={styles.textStyle}>{image.msgNumber}</Text>
                    </View>
                );
            }else{
                iconItem.push(
                    <View key={i} style={styles.viewStyle}>
                        <Image source={{uri:image.icon}}  style={styles.imageStyle}></Image>
                    </View>
                );
            }
        }
        return iconItem;
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
        //水平靠右
        justifyContent:'flex-end',
    },
    /*文字颜色*/
    imageStyle:{
        width:22,
        height:22,

    },
    viewStyle:{
        marginRight:13,
    },

    textStyle:{
        width:12,
        height:12,
        backgroundColor:'red',
        borderRadius:6,
        /*定位*/
        position:'absolute',
        right:1,
        color:'white',
        textAlign:'center',
        marginBottom:5,
        paddingTop:0,
        fontSize:9,
    }

})
