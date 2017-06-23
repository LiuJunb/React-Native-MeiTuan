# ReactNative美团项目（一）

## 1.底部TabBar组件--TabNavigator

     在目前市面上的APP中，大部分都是下面这种选项之间的切换，比如：微信、微博、QQ空间......, 在iOS中，我们可以通过TabItem类进行实现, 在android可以通过TabHost实现。那么，在React Native中，我们应该怎么实现呢？

![img](https://mmbiz.qpic.cn/mmbiz/57sLf8oUA1vROcUI5DAFNVjFhtet6DgOjViak3W5cjIDq6SDZt4WFrU7T8KBbyRUIct1UxSy4BuhnmbrqD6ImCg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

    

      在React Native中可以通过**TabBarIOS和TabBarIOS.Item**组件或者**TabNavigator和TabNavigator.item**组件来实现选项卡切换效果，前面那个大家可以看到后面带有IOS，所以这个组件是不支持Android的，而后面那个是支持iOS和Android的，并且TabNavigator是第三方库组件。



### **一、TabNavigator常见的属性**

上面的代码当中，TabNavigator继承于View类，除了包括style的一些属性可以和View控件一样设置外，它还具有其他一些独特的属性，用于控制样式
**sceneStyle**：场景样式，即Tab页容器的样式，可按View的style设置
**tabBarStyle**：TabBar的样式，基本也可按照普通的style写法进行设置
**tabBarShadowStyle**：TabBar阴影的样式，不过对于扁平化的设计，这个属性应该用处不大
**hidesTabTouch**：bool类型，即是否隐藏Tab按钮的按下效果



### **二、TabNavigator.Item常见的属性**

TabNavigator的Item就是我们所看到的5个Tab按钮以及它们所对应的页面，这些页面在[Android](http://lib.csdn.net/base/android)中可能以Fragment呈现，在[iOS](http://lib.csdn.net/base/ios)中可能以UIView呈现，而在[React Native](http://lib.csdn.net/base/reactnative)中，则是一个<View>，我们可以自己义，也可以直接放置其他控件。

这些Item在TabNavigator中，以<TabNavigator.Item>形式呈现，其可设置的相关属性如下：

**renderIcon: 必填项**，即图标，但为function类型，所以这里需要用到Arrow Function


**renderSelectedIcon**: 选中状态的图标，非必填，也是function类型
**badgeText**: 即Tab右上角的提示文字，可为String或Number，类似QQ中Tab右上角的消息提示，非必填
**renderBadge**: 提示角标渲染方式，function类型，类似render的使用，非必填
**title**: 标题，String类型，非必填
**titleStyle**: 标题样式，style类型，非必填
**selectedTitleStyle**: 选中标题样式，style类型，非必填
**selected**: bool型，是否选中状态，可使用setState进行控制，默认false
**onPress**: function型，即点击事件的回调函数，这里需要控制的是state，而切换页面已经由控件本身帮我们实现好了
**allowFontScaling**: bool型，是否允许字体缩放，默认false

而对于我们所关心的页面切换，在TabNavigator.Item中，可将其置于**{}**之中，即作为Item的子元素存在，这里请注意：如果添加了一个Item，必须为其添加一个View，否则将无法运行！



### **三、TabNavigator使用案例**

#### 1.引入TabNavigator库：

```
npm install react-native-tab-navigator --save
```

![](1.png)

#### 2.项目引入TabNavigator组件

**sceneStyle**：场景样式，即Tab页容器的样式，可按View的style设置
**tabBarStyle**：TabBar的样式，基本也可按照普通的style写法进行设置

![](2.png)



#### 4.添加TabNavigator.Item组件

**renderIcon: 必填项**，即图标，但为function类型，所以这里需要用到Arrow Function

**title**: 标题，String类型，非必填

![](3.png)

#### 5.给TabNavigator.Item组件添加样式

**renderSelectedIcon**: 选中状态的图标，非必填，也是function类型
**badgeText**: 即Tab右上角的提示文字，可为String或Number，类似QQ中Tab右上角的消息提示，非必填
**renderBadge**: 提示角标渲染方式，function类型，类似render的使用，非必填

**titleStyle**: 标题样式，style类型，非必填
**selectedTitleStyle**: 选中标题样式，style类型，非必填
**selected**: bool型，是否选中状态，可使用setState进行控制，默认false

![](4.png)

样式

![](5.png)

#### 6.处理界面切换事件

1.添加状态机

![](6.png)

2.监听点击事件

![](7.png)

3.处理点击事件

![](8.png)

4.执行的效果

![](9.png)



## 2.导航条组件--Naviagtor

在开发中，我们需要实现**多个界面的切换**，这时候就需要一个导航控制器来进行**各种界面切换效果**。那么，在React Native中有两个组件能够实现这样的效果：**Navigator**和NavigatorIOS。

 其中Navigator是适配Android和iOS，而NavigatorIOS则是包装了UIKit的导航功能，可以使用左划功能来返回到上一界面。

![img](https://mmbiz.qpic.cn/mmbiz/57sLf8oUA1ucibAv2ed8QgRHgYBkNiczethicRvyRg81UzjWZEsuXj5CzI3ziavfsqgH5Hjs7ODXd6RR4edJ9ztrzg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

### **一、Navigator**

       很多时候，我们需要导航器来应对不同场景（页面）间的切换。它通过路由对象来分辨不同的场景，我们这里采用的就是 `renderScene` 方法，根据指定的路由来渲染。

#### **1.1 常用的属性**

**1). initialRoute ={{ name: 'home', component: HomeScene }}** 

 这个指定了默认的页面，也就是启动的组件页面

**2). configureScene ={() => {**

**return Navigator. SceneConfigs .HorizontalSwipeJump;**

**}}**

页面之间跳转时候的动画手势，可以看这个目录:

node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js

(可以看其他跳转的时候的方向)，

比如：PushFromRight   FloatFromRight  FloatFromLeft   FloatFromBottom   FloatFromBottomAndroid    FadeAndroid   HorizontalSwipeJump    HorizontalSwipeJumpFromRight    VerticalUpSwipeJump    VerticalDownSwipeJump等等。

**3). renderScene**

具体是方法如下:

(route, navigator) =><MySceneComponent title={route.title} navigator={navigator} />      

       两个参数中的route包含的是initial的时候传递的name和component，而navigator是一个我们需要用的Navigator的对象；

       所以当我们拿到route中的component的时候，我们就可以将navigator传递给它，正因为如此，我们的组件HomeScene才可以通过  this.props.navigator，拿到路由。

**4). initialRouteStack  [object] 参数对象数组**

       这是一个初始化的路由数组进行初始化。如果initalRoute属性没有设置的话，那么就必须设置initialRouteStack属性，使用该最后一项作为初始路由。 如果initalRouteStack属性没有设置的话，该会生成只包含initalRoute值的数组

**5). navigationBar  node**

该为可选的参数，在页面切换中用来提供一个导航栏

**6). navigator object**

该为可选参数，可以从父类导航器中获取导航器对象

**7). sceneStyle 样式风格**

该继承了View视图的所有样式风格，用于设置每个页面容器的风格

#### **1.2 常用的导航器方法**

当获取了导航器对象的引用，我们可以进行调用以下一些方法来实现页面导航功能:

 **getCurrentRoutes()** 该进行返回存在的路由列表信息

**jumpBack()**   该进行回退操作  但是该不会卸载(删除)当前的页面

**jumpForward()**   进行跳转到相当于当前页面的下一个页面

**jumpTo(route)**    根据传入的一个路由信息，跳转到一个指定的页面(该页面不会卸载删除)

**push(route)**     导航切换到一个新的页面中，新的页面进行压入栈。通过jumpForward()方法可以回退过去

**pop()**  当前页面弹出来，跳转到栈中下一个页面，并且卸载删除掉当前的页面

**replace(route)**  只用传入的路由的指定页面进行替换掉当前的页面

**replaceAtIndex(route,index)**    传入路由以及位置索引，使用该路由指定的页面跳转到指定位置的页面


 **replacePrevious(route)**    传入路由，通过指定路由的页面替换掉前一个页面


 **resetTo(route)** 进行导航到新的界面，并且重置整个路由栈


 **immediatelyResetRouteStack(routeStack)** 该通过一个路由页面数组来进行重置路由栈


 **popToRoute(route)** 进行弹出相关页面，跳转到指定路由的页面，弹出来的页面会被卸载删除

 **popToTop()**进行弹出页面，导航到栈中的第一个页面，弹出来的所有页面会被卸载删除

注意：route其实就是一个对象

```
//进入一个界面
onPress() {
    this.props.navigator.push({
        component: function,   // 路由到对应的版块
        title: string,   // 标题
        params: object,   // 传递的参数
    });
}
//退出一个界面
onBack() {
    this.props.navigator.pop();
}
```

#### **1.3 默认写法**

**注意：Navigator组件在React-Native 的4.4版本以后就被标志位过时。解决：新建项目后就降低ReactNative的版本号**

```
<Navigator
    initialRoute={{ name: defaultName, component: defaultComponent }}
    configureScene={(route) => {
        return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }}
    renderScene={(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
    }}
/>
```

#### 1.4使用案例

第一步：新建一个ReactNative版本低于0.44的项目

![](10.png)

第二步：使用Navigator包装HomePage组件

![](11.png)

第三步：实现界面跳转（HomePage-->DetailPage）

![](12.png)

第四步：实现界面返回

![](13.png)

第五步：界面之间数据的传递和接收

传递

![](15.png)

接收

![](14.png)



### 二、Navigator.IOS

       NavigatorIOS包装了UIKit的导航功能，可以使用左划功能来返回到上一界面。

#### **1.1  常用的导航器方法**

> - **push(route)**
>
> - 导航器跳转到一个新的路由。
>
> - **pop()**
>
> - 回到上一页。
>
> - **popN(n)**
>
> - 回到N页之前。当N=1的时候，效果和 pop() 一样。
>
> - **replace(route)**
>
> - 替换当前页的路由，并立即加载新路由的视图。
>
> - **replacePrevious(route)**
>
> - 替换上一页的路由/视图。
>
> - **replacePreviousAndPop(route)**
>
> - 替换上一页的路由/视图并且立刻切换回上一页。
>
> - **resetTo(route)**
>
> - 替换最顶级的路由并且回到它
>
> - **popToRoute(route)**
>
> - 一直回到某个指定的路由。
>
> - **popToTop()**
>
> - 回到最顶层的路由。
>
>   ​

#### **1.2  常用的属性**

**barTintColor string**

导航条的背景颜色。

**initialRoute**{

component: function,   // 路由到对应的版块

title: string,   // 标题

passProps: object,   // 传递的参数

backButtonIcon: Image.propTypes.source,  // 返回按钮

backButtonTitle: string,  // 返回按钮标题

leftButtonIcon:Image.propTypes.source,  

leftButtonTitle: string, 

onLeftButtonPress: function, 

rightButtonIcon: Image.propTypes.source, 

rightButtonTitle: string, 

onRightButtonPress: function, 

wrapperStyle: [object Object]

} 

NavigatorIOS使用"路由"对象来包含要渲染的子视图、它们的属性、以及导航条配置。"push"和任何其它的导航函数的参数都是这样的路由对象。

 比如：下面页面的跳转：

```
//进入一个界面
onPress() {
    this.props.navigator.push({
        component: function,   // 路由到对应的版块
        title: string,   // 标题
        passProps: object,   // 传递的参数
    });
}
```

>  **itemWrapperStyle      View#style**

      导航器中的组件的默认属性。一个常见的用途是设置所有页面的背景颜色。

> **navigationBarHidden  bool**

一个布尔值，决定导航栏是否隐藏。

> **shadowHidden bool**

一个布尔值，决定是否要隐藏1像素的阴影。

> **tintColor string**

导航栏上按钮的颜色。

> **titleTextColor string**

导航器标题的文字颜色。

> **translucent bool**

一个布尔值，决定是否导航条是半透明的。



## 3.美团项目（RN版本是0.41.1）

### 1.项目搭建

注意要要降低RN版本

![](16.png)



### 2.设计底部选项卡

1.引入TabNavigator第三方框架

```
npm install react-native-tab-navigator --save
```

2.设计底部选项卡

```
tabBarStyle   //底部导航条的样式，这里设计高度50
title='首页'     //title
renderIcon    //渲染item的图片，默认
renderSelectedIcon   //渲染item的图片，选中
selectedTitleStyle  //渲染文字的样式，选中
selected    //渲染文字的样式，默认
onPress    //监听点击事件
```

![](17.png)

添加样式

```
iconStyle:{
        width:Platform.OS=='ios' ? 30 : 25,  //如果是ios平台，用30dp; 如果是android 用25dp
        height:Platform.OS=='ios' ? 30 : 25,
},
```

![](18.png)

3.底部选项卡的切换

```
selected={this.state.select=='首页'}   // == 号是等值比较
onPress={ ()=> this.setState({
    select:'首页'                      //修改状态机select的值
})}
```

![](19.png)

4.给每一个界面包装一个导航

![](20.png)

```
  <Navigator
             {/*初始化路由：把HomePage组件封装到路由中去*/}
            initialRoute={{ name: 'HomePage', component: HomePage }}
            {/*指定界面跳转的动画PushFromRight*/}
            configureScene={(route) => {
                            return Navigator.SceneConfigs.PushFromRight   ;
                        }}
            {/*该导航要包装的界面*/}
            renderScene={(route, navigator) => {
            				{/*通过路由来获取该导航要包装的界面*/}
                            let Component = route.component;
                            {/*...route.params 把route中params的属性中的所有值传递给HomePage组件，
                            如果没有该属性，那么在以后界面传递数据的时候会失败*/}
                            return <Component  {...route.params} navigator={navigator} />
                        }}
        />
```



### 3.封装首页头部导航条

1.TopBar布局的实现

![](21.png)

2.样式实现

```

const styles = StyleSheet.create({
    /*头部导航条背景*/
    topBarStyle:{
        flexDirection:'row',
        height:40,
        backgroundColor:'#06C1AE',
        //垂直居中
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
        //权重
        flex:3,
        //背景
        backgroundColor:'white',
        borderRadius:15,
        height:27
    },
    /*输入框*/
    textInputStyle:{
        //去除padding
        paddingTop:0,
        paddingBottom:0,
        borderWidth:0,
        height:28,
        fontSize:10,
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
        //定位
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
```

效果：

![](22.png)





### 4.封装附近头部导航条

NearBar布局：

![](23.png)

样式：

```

const styles = StyleSheet.create({
    /*头部导航条背景*/
    topBarStyle:{
        flexDirection:'row',
        height:40,
        backgroundColor:'#06C1AE',
        //垂直居中
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
        //权重
        flex:5,
        //设计背景
        backgroundColor:'white',
        borderRadius:15,
        height:27,
        marginRight:10,

    },
    /*输入框*/
    textInputStyle:{
        //去掉padding
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
        //定位
        position:'absolute',
        top:4,
        left:10,
    },

})
```

执行效果：

![](24.png)



### 5.封装逛一逛和订单头部导航条

OrderBar的布局

![](25.png)

样式：

```
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

})
```

执行效果

![](26.png)

### 6.封装个人中心头部导航条

MineBar的布局

![](27.png)

样式：

```

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

```

执行效果

![](29.png)

### 7.封装个人中心列表组件

#### 1.定义分界线组件

![](30.png)

#### 2.定义Item组件

![](32.png)

样式：

```

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
```



#### 3.定义分界线组件

![](31.png)



#### 4.渲染列表

数据的准备：

![](41.png)

渲染每个Item的函数

![](33.png)

![](34.png)

效果：

![](35.png)

#### 5.渲染头部

![](36.png)

渲染函数：

![](37.png)

样式：

![](38.png)

执行效果：

![](39.png)

完善每一个Item的数据

![](40.png)

![](43.png)

效果图：

![](42.png)

### 8.个人中心登录

#### 1.设计点击事件

![](44.png)

![](45.png)



#### 2.添加登录界面的头部导航条

![](46.png)

再次封装OrderBar组件

![](47.png)

样式：

![](48.png)

#### 3.监听返回事件

监听手机物理返回按键：

```
onBackAndroid =  () =>  {
        const navigator  = this.props.navigator;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：'+routers.length);

        if (routers.length > 1) {
            navigator.pop();
            return true;//接管默认行为
        }
        return false;//默认行为
};
    
componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
}
```

![](49.png)

监听导航条中的返回事件

![](50.png)



#### 4.完善登录界面布局：

布局：

```
    render(){
        return(
            <View style={{flex: 1}}>
                <OrderBar leftName='登录' hasArrow={true} navigator={this.props.navigator}></OrderBar>
                <View style={styles.container}>
                    {/*logo*/}
                    <Image source={{uri:'header_icon'}} style={styles.ImageStyle}></Image>
                    {/*输入用户名和密码*/}
                    <View style={{marginTop:20}}>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            placeholder='输入用户名'
                            style={styles.text1Input}>
                        </TextInput>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            placeholder='输入密码'
                            secureTextEntry={true}
                            style={styles.text1Input}>
                        </TextInput>
                    </View>

                    {/*登录按钮*/}
                    <View>
                        <Text style={styles.loginStyle}>登录</Text>
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
```

样式：

```
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
```

执行效果：

![](51.png)





#### 5.完善点击登录界面的跳转

1.解决点击登录按钮卡顿的问题

![](52.png)

2.给登录界面添加背景

![](53.png)

3.修改导航器Navigator的写法

在index.android.js中添加Navigator

![](54.png)

4.修改MaimPage界面的导航器写法

![](55.png)

修改后的效果：

![](56.png)







































































