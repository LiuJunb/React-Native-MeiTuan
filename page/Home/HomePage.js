/**
 * Created by Administrator on 2017/6/15 0015.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import TopBar from '../../component/TopBar';
import HomeTop from './HomeTop';
import DividingLine from '../../component/DividingLine';
import  DividingHomeLine from '../../component/DividingHomeLine';
import  HomeCenter from './HomeCenter';
import  HomeBottom from './HomeBottom';
export default class HomePage extends Component {

    /***定义熟悉，只有get方法*/
    static  defaultProps={
        url:'http://192.168.45.249:8080/MeiTuan/home',
    };

    /***状态机*/
    state ={
        categorys:[],
        thridItems:[],
        fourItems:[],
        goods:[]
    }


    render(){
        return(
            <View style={styles.homePageBg}>
                <TopBar></TopBar>
                <ScrollView style={styles.scrollViewStyles}>
                     {/*实现头部*/}
                     <HomeTop categorys={this.state.categorys}></HomeTop>
                     {/*分界线*/}
                     <DividingLine></DividingLine>
                    {/*三个Item*/}
                    <HomeCenter items={this.state.thridItems}></HomeCenter>
                    <DividingHomeLine></DividingHomeLine>
                    {/*四个Item*/}
                    <HomeCenter items={this.state.fourItems}></HomeCenter>
                    {/*分界线*/}
                    <DividingLine></DividingLine>
                    {/*猜你喜欢*/}
                    <Text style={{marginBottom:10,marginTop:10,textAlign:'center'}}> - 猜你喜欢 - </Text>
                    <DividingHomeLine></DividingHomeLine>
                    {/*底部猜你喜欢*/}
                    <HomeBottom goods={this.state.goods}></HomeBottom>
                </ScrollView>


            </View>
        )
    }

    /***界面渲染完成后调用*/
    componentDidMount() {
        /***访问网络获取数据*/
        fetch(this.props.url,{
            method:'GET',
            headers:{
            },
        }).then((response)=>response.json())
            .then((responsejson)=>{
                console.log(responsejson.categorys[0].title);
                /***把网络下载的数据存到状态机里*/
                this.setState({
                    categorys:responsejson.categorys,
                    thridItems:responsejson.thridItems,
                    fourItems:responsejson.fourItems,
                    goods:responsejson.goods
                })
            })
            .catch((error)=>{
                alert('error'+error.toString());
            })
    }
}
const styles = StyleSheet.create({
    homePageBg:{
        flex:1,
    },
    scrollViewStyles:{
        backgroundColor:'#F5FCFF',
    }
})
