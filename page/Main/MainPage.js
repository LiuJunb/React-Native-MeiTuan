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
    Platform,
    Navigator,
} from 'react-native';

import HomePage from '../Home/HomePage';
import MinePage from '../Mine/MinePage';
import NearPage from '../Near/NearPage';
import OrderPage from '../Order/OrderPage';
import ShopPage from '../Shop/ShopPage';

//引入TabNavigator
import TabNavigator from 'react-native-tab-navigator';
export default class MainPage extends Component {
    /***状态机*/
    constructor(props){
        super(props)
        this.state={
            select:'首页'
        }
    }
    render(){
        return(
            <TabNavigator
            tabBarStyle={styles.tabBStyle}
            >
                {/*首页*/}
                <TabNavigator.Item
                    title='首页'
                    renderIcon={ ()=> <Image source={{uri:'ic_vector_home_normal'}}
                                style={styles.iconStyle}></Image>  }
                    renderSelectedIcon={ ()=> <Image source={{uri:'ic_vector_home_pressed'}}
                                style={styles.iconStyle}></Image>  }
                    selectedTitleStyle={styles.titleStyles}
                    selected={this.state.select=='首页'}
                    onPress={ ()=> this.setState({
                        select:'首页'
                    })}
                >
                    {/*...this.props将该组件所有的props属性的值传递到Home组件，例如：navigator*/}
                    <HomePage {...this.props}/>

                </TabNavigator.Item>

                {/*附近*/}
                <TabNavigator.Item
                    title='附近'
                    renderIcon={ ()=> <Image source={{uri:'ic_vector_nearby_normal'}}
                                style={styles.iconStyle}></Image>  }
                    renderSelectedIcon={ ()=> <Image source={{uri:'ic_vector_nearby_pressed'}}
                                style={styles.iconStyle}></Image>  }
                    selectedTitleStyle={styles.titleStyles}
                    selected={this.state.select=='附近'}
                    onPress={ ()=> this.setState({
                        select:'附近'
                    })}

                >
                    <NearPage {...this.props}/>

                </TabNavigator.Item>
                {/*逛一逛*/}
                <TabNavigator.Item
                    title='逛一逛'
                    renderIcon={ ()=> <Image source={{uri:'ic_vector_discover_normal'}}
                                style={styles.iconStyle}></Image>  }
                    renderSelectedIcon={ ()=> <Image source={{uri:'ic_vector_discover_pressed'}}
                                style={styles.iconStyle}></Image>  }
                    selectedTitleStyle={styles.titleStyles}
                    selected={this.state.select=='逛一逛'}
                    onPress={ ()=> this.setState({
                        select:'逛一逛'
                    })}
                >
                    <ShopPage {...this.props}/>

                </TabNavigator.Item>
                {/*订单*/}
                <TabNavigator.Item
                    title='订单'
                    renderIcon={ ()=> <Image source={{uri:'ic_vector_order_normal'}}
                                style={styles.iconStyle}></Image>  }
                    renderSelectedIcon={ ()=> <Image source={{uri:'ic_vector_order_pressed'}}
                                style={styles.iconStyle}></Image>  }
                    selectedTitleStyle={styles.titleStyles}
                    selected={this.state.select=='订单'}
                    onPress={ ()=> this.setState({
                        select:'订单'
                    })}
                >
                    <OrderPage {...this.props}/>

                </TabNavigator.Item>
                {/*我的*/}
                <TabNavigator.Item
                    title='我的'
                    renderIcon={ ()=> <Image source={{uri:'ic_vector_mine_normal'}}
                                style={styles.iconStyle}></Image>  }
                    renderSelectedIcon={ ()=> <Image source={{uri:'ic_vector_mine_pressed'}}
                                style={styles.iconStyle}></Image>  }
                    selectedTitleStyle={styles.titleStyles}
                    selected={this.state.select=='我的'}
                    onPress={ ()=> this.setState({
                        select:'我的'
                    })}
                >
                    <MinePage {...this.props}/>

                </TabNavigator.Item>
            </TabNavigator>
        )
    }

}
const styles = StyleSheet.create({
    tabBStyle:{
        height:50,
    },
    iconStyle:{
        width:Platform.OS=='ios' ? 30 : 25,
        height:Platform.OS=='ios' ? 30 : 25,
    },
    titleStyles:{
        color:'#06C1AE'
    }

})
