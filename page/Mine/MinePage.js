/**
 * Created by Administrator on 2017/6/15 0015.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';
import  MineBar from '../../component/MineBar';
import  DividingLine from '../../component/DividingLine';
import  DividingSmallLine from '../../component/DividingSmallLine';
import  MineItemView from '../../component/MineItemView';
import  LoginPage from '../Login/LoginPage';
var MineBean=require('../../data/MineBean.json');

export default class MinePage extends Component {



    /**状态机*/
    constructor(props){
        super(props);
        this.state={
            Icons:MineBean.TopBar,
            headerItem:MineBean.headerItem,
            items:MineBean.items,
            userId:''
        }
        _this=this;
    }

    render(){
        return(
            <View>
                <MineBar Icons={this.state.Icons}></MineBar>
                <ScrollView>
                    {/*渲染头部*/}
                    {this.renderHeader()}
                    {/*渲染每一个Item*/}
                    {this.renderItems()}
                </ScrollView>
            </View>
        )
    }

    /***渲染头部*/
    renderHeader() {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={()=>this.loginAction()}>
            <View style={styles.viewHeaderStyle}>
                {/*左边*/}
                <View>
                    <Image style={styles.imageHeader} source={{uri:this.state.headerItem.headerImage}}></Image>
                </View>
                {/*中间*/}
                <View>
                    {/*上边*/}
                    <View style={styles.view1Style}>
                        <Text style={styles.text1Style}>{this.state.headerItem.userName}</Text>
                        <Image style={{width:14,height:14}} source={{uri:this.state.headerItem.leveImage}}></Image>

                    </View>
                    {/*下边*/}
                    <View style={styles.view1Style}>
                        <Text style={styles.text2Style}>{this.state.headerItem.descrption}</Text>
                        <Image style={{width:6,height:10}} source={{uri:'daily_recomm_arrow'}}></Image>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }

    /**
     * 点击跳到登录
     */
    loginAction(){

        //禁止重复登录
        if(this.state.userId==''){
            //安排一个任务在交互和动画完成之后执行
            InteractionManager.runAfterInteractions(() => {

                this.props.navigator.push({
                    component:LoginPage,
                    title:'登录',
                    params:{
                        id:'123123',//1.传递参数
                        getUser(user){//2.获取上个界面返回的数据
                            _this.setState({
                                //更新页面
                                Icons:user.topBar,
                                headerItem:user.headerItem,
                                items:user.items,
                                userId:user.id,
                            })
                        },
                    }
                })

            })
        }

    }


    /**
     * 从网络获取数据
     */
    componentDidMount() {

    }

    /**渲染每一个Item*/
    renderItems(){
        var ItemBean=[];
        var CatetoryItems=this.state.items;
        for(var i=0;i<CatetoryItems.length;i++){
           var items=CatetoryItems[i];
            //每一组的分界线
            ItemBean.push(
                <View key={i}>
                    <DividingLine/>
                </View>
            )
           //每一组
           for(var j=0;j<items.length;j++){
               var item=items[j];
               //最后一个Item不需要分界线
               if(j==items.length-1 || j==0){
                   ItemBean.push(
                       <View key={i+""+j}>
                           <MineItemView option={item}/>
                       </View>
                   )
               }else{
                   ItemBean.push(
                       <View key={i+""+j}>
                           <DividingSmallLine/>
                           <MineItemView option={item}/>
                       </View>

                   )
               }
           }
        }
        ItemBean.push(
            <View key="last">
                <DividingLine />

            </View>

        )
       return ItemBean;
    }
}


var styles = StyleSheet.create({
    viewHeaderStyle:{
        backgroundColor:'#06C1AE',
        height:60,
        flexDirection:'row',
        alignItems:'center'
    },
    view1Style:{
      flexDirection:'row',
        alignItems:'center'
    },
    imageHeader:{
        width:45,
        height:45,
        marginLeft:15,
        marginRight:15,
    },
    text1Style:{
        color:'white',
        fontSize:16,
        marginRight:5

    },
    text2Style:{
        color:'white',
        fontSize:12,
        marginRight:5
    }


})
