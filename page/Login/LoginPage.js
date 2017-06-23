/**
 * Created by Administrator on 2017/6/15 0015.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    BackAndroid,
    Platform,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

import Toast from 'react-native-root-toast';

var Dimensions=require('Dimensions');
//计算屏幕的宽度
var windowWidth=Dimensions.get('window').width;
import  OrderBar from '../../component/OrderBar';
export default class LoginPage extends Component {

    onBackAndroid =  ()=>  {
        const navigator  = this.props.navigator;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：'+routers.length);

        if (routers.length > 1) {
            navigator.pop();
            return true;//接管默认行为
        }
        return false;//默认行为
    };

    /***状态机*/
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    render(){
        return(
            <View style={{backgroundColor:'#dddddd',flex: 1}}>
                <OrderBar leftName='登录' hasArrow={true} navigator={this.props.navigator}></OrderBar>
                <View style={styles.container}>
                    {/*logo*/}
                    <Image source={{uri:'header_icon'}} style={styles.ImageStyle}></Image>
                    {/*输入用户名和密码*/}
                    <View style={{marginTop:20}}>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            placeholder='输入用户名'
                            style={styles.text1Input}
                            onChangeText={(userName)=>this.setState({username:userName})}
                        >
                        </TextInput>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            placeholder='输入密码'
                            secureTextEntry={true}
                            style={styles.text1Input}

                            onChangeText={(password)=>this.setState({password})}
                        >
                        </TextInput>
                    </View>
                    {/*登录按钮*/}
                    <View>
                        <TouchableOpacity activeOpacity={0.9} onPress={()=>this.loginEvent()}>
                            <Text style={styles.loginStyle}>登录</Text>
                        </TouchableOpacity>
                    </View>

                    {/*设计*/}
                    <View style={styles.viewSettingStyle}>
                        <Text style={styles.textOutLogin} >无法登录</Text>
                        <Text style={[styles.textOutLogin,{textAlign:'right'}]} >新用户</Text>
                    </View>

                    {/*其它登录方式*/}
                    <View style={styles.viewOtherStyle}>
                        <Text>其他登录方式</Text>
                        <Image source={{uri:'share_ic_base_share_qq'}} style={styles.loginImage}></Image>
                        <Image source={{uri:'share_ic_base_share_sina_weibo'}} style={styles.loginImage}></Image>
                        <Image source={{uri:'share_ic_base_share_weixin'}} style={styles.loginImage}></Image>
                    </View>


                </View>
            </View>
        )
    }

    /***点击登录*/
    loginEvent(){
        //1.获取到用户名和密码
        // alert(this.state.password+"  "+this.state.username);
        var password=this.state.password;
        var username=this.state.username;
        if(password=='' || username==''){
            alert('请输入用户名和密码');
            return;
        }

        this.login(username,password);
    }

    /***登录*/
    login(username,password){
        /**POST方法请求网络获取数据*/
        fetch('http://192.168.45.249:8080/MeiTuan/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:'username='+username+"&password="+password,
        })
            .then( (response) =>response.json())
            .then((responseJson)=>{
                //判断返回结果：
                if(responseJson.state=='200'){
                    //1.显示登录成功
                    //2.将数据回传到个人中心页面
                    if(this.props.getUser){
                        this.props.getUser(responseJson);
                    }
                    //3.关闭该界面
                    this.props.navigator.pop();
                }else{
                    //显示登录失败
                }
                this.showToast(responseJson.result);
            })
            .catch((error)=>{
                alert("error="+error);
            })
    }

    /**
     * 冒吐司
     * @param str
     */
    showToast(str){
        // Add a Toast on screen.
        let toast = Toast.show(str, {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
        });
    }

}



const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems: 'center'
    },

    ImageStyle: {
        width: 90,
        height: 90,
        marginTop:40,
        borderRadius:50,
    },

    text1Input: {
        borderWidth: 0,
        borderColor: 'gray',
        width: windowWidth - 20,
        height: 30,
        padding: 0,
        marginTop: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius:6,
    },

    loginStyle: {
        width: windowWidth - 20,
        height: 30,
        borderWidth: 0,
        backgroundColor: '#49A0F8',
        marginTop:20,
        borderRadius:5,
        color:'white',
        fontSize:14,
        textAlign:'center',
        paddingTop:6,
    },

    viewSettingStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        width:windowWidth-20
    },

    textOutLogin:{
        color:'#49A0F8',
        flex:1,
    },

    viewOtherStyle:{

        width:windowWidth-20,
        height:40,
        position:'absolute',
        bottom:20,
        //主轴方向为水平
        flexDirection:'row',
        //它里面的内容垂直居中
        alignItems:'center'
    },

    loginImage: {
        width: 35,
        height: 35,
        marginLeft: 8,
    },


});
