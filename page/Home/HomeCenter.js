/**
 * Created by Administrator on 2017/6/22 0022.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


export  default  class HomeCenter extends Component{
    static  defaultProps={
        items:[],
    }

    render(){
        return(
            <View style={styles.viewItem}>
                {/*渲染每一个item*/}
                {this.renderItem()}
            </View>
        )
    }
    /**渲染一个Item*/
    renderItem(){
        var Items=[];
        var items= this.props.items;
        if(items.length<=0)
            return;
        for (var i=0;i<items.length;i++){
            /*每一个item右边的分界线*/
            var color= (i== (items.length-1) )?'#FFFFFF':'#dddddd';
            var image=items[i];
            Items.push(
               this.renderView(image,color,i)
            )
        }
        return Items;

    }
    /***渲染一个View*/
    renderView(image,color,i){
        return(
            <TouchableOpacity key={i}
                              style={[styles.viewStyle,{borderRightWidth:1,borderRightColor:color}]}
                              activeOpacity={0.5} onPress={ ()=>this.onClickItem(image)}>
                <View>
                    <Text style={styles.textTitle}>{image.title}</Text>
                    <Text style={[styles.textDescrption,{color:image.deccrptionColor}]}>{image.descrption}</Text>
                    <Image source={{uri:image.imageUrl}} style={styles.imageStyle}></Image>
                </View>
            </TouchableOpacity>
        )
    }

    /***处理点击事件*/
    onClickItem(image){
       alert(image.title);
    }

}

const styles=StyleSheet.create({
    /*最外层view的样式*/
    viewItem:{
        flexDirection:'row',

    },
    /*包裹图片和文字的view*/
    viewStyle:{
        flexDirection:'column',
        /*权重*/
        flex:1,
        /*水平居中*/
        alignItems:'center',
    },

    textTitle:{
        fontSize:15,
        marginTop:6,
    },
    textDescrption:{
        fontSize:12,
        marginBottom:6,
    },
    imageStyle:{
        width: 50,
        height:50,
        borderRadius:30,
        marginBottom:10
    },

})