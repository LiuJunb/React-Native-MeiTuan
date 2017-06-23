/**
 * Created by Administrator on 2017/6/22 0022.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

var Dimensions=require('Dimensions');
var windowWidth=Dimensions.get('window').width;
var cols=5;
var ImageWidth=50;
var MarginLeft=(windowWidth-ImageWidth*cols)/(cols+1);
var MarginTop=8;
export default class  HomeTop extends Component{

    /***定义属性，只有get方法*/
    static  defaultProps={
        categorys:[],
    }

    /**状态机*/
    state={
        currentPage:0,
    }
    /*界面渲染*/
    render(){
        return(
            <View>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onMomentumScrollEnd={ (e)=>this.pageEnd(e) }>
                    <View style={styles.viewPage}>
                        {/*渲染第一页*/}
                        {this.renderPage(1)}
                    </View>
                    <View style={styles.viewPage}>
                        {/*渲染第一页*/}
                        {this.renderPage(2)}
                    </View>
                </ScrollView>
                <View style={styles.viewCirle}>
                    {/*渲染指示器（点）*/}
                    {this.renderCirle()}
                </View>
            </View>
        )
    }
    /**监听页面的滑动*/
    pageEnd(event){
        var currentX=event.nativeEvent.contentOffset.x;
        var page=Math.round(currentX/windowWidth);
        this.setState({
            currentPage:page,
        })
    }

    /**
     * 渲染每一页
     * @param pageNumber
     * @returns {Array}
     */
    renderPage(pageNumber){
        var categorys=this.props.categorys;
        if(categorys.length<=0)
            return;
        var page=[];
        // alert(image.icon);
        var Number=categorys.length;
        for (var i=0;i<Number;i++){
            var img=categorys[i];
            //0-9
            if(pageNumber==1){
                if(i<Number/2){
                    page.push(
                        <View key={i} style={styles.viewIconStyle}>
                            <Image source={{uri:img.icon}} style={styles.imageIcon}></Image>
                            <Text>{img.title}</Text>
                        </View>
                    )
                }
            //10-19
            }else{
                if(i>=Number/2){
                    page.push(
                        <View key={i} style={styles.viewIconStyle}>
                            <Image source={{uri:img.icon}} style={styles.imageIcon}></Image>
                            <Text>{img.title}</Text>
                        </View>
                    )
                }
            }

        }
        return page;
    }

    /***小点*/
    renderCirle(){
        var Cirles=[];
        for(var i=0;i<2;i++){
            /*小点颜色的选择*/
            var color=this.state.currentPage==i?'#06C1AE':'#dddddd';
            Cirles.push(
                <Text key={i} style={[styles.textCirle,{backgroundColor:color}]}></Text>
            )
        }
        return Cirles;
    }
}

const styles =StyleSheet.create({

    /*每一页的布局*/
    viewPage:{
        // backgroundColor:'blue',
        height:160,
        width:windowWidth,
        flexDirection:'row',
        flexWrap:'wrap',
    },

    /*每一个item的布局*/
    viewIconStyle:{
        flexDirection:'column',
        // backgroundColor:'red',
        width:50,
        height:70,
        marginLeft:MarginLeft,
        marginTop:MarginTop,
        alignItems:'center'

    },
    imageIcon:{
        width:ImageWidth,
        height:ImageWidth
    },

    /*指示器的样式*/
    viewCirle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:20,
        backgroundColor:'rgba(0,0,0,0)',
    },
    textCirle:{
        width:8,
        height:8,
        margin:3,
        borderRadius:4,
    },
})