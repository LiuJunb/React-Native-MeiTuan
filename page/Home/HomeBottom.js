/**
 * Created by Administrator on 2017/6/22 0022.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

export  default  class HomeBottom extends Component {
    /***定义属性*/
    static  defaultProps={
        goods:[],
    }
    /***状态机*/
    constructor(props){
        super(props);
        var ds=new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2 } );
        this.state={
            dataSource:ds,
        }
    }
    render() {
        /**如果没有数据*/
        if(this.props.goods.length<=0)
            return(
             <View></View>
            )
        // alert(this.props.goods[0].storeName);
        /**如果有数据就刷新一下状态机*/
        this.state={
            dataSource:this.state.dataSource.cloneWithRows(this.props.goods),
        }
        /**如果有数据*/
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRows(rowData)}
                scrollEnabled={true}
            >
            </ListView>
        )
    }





    /***渲染每一行*/
    renderRows(rowDate){
        return(
            <TouchableOpacity activeOpacity={0.9} onPress={()=>this.onItemClick(rowDate)}>
            <View style={styles.viewOutStyle}>
                {/*左边*/}
                <View style={{flex:2.1}}>
                    <Image source={{uri:rowDate.icon}} style={styles.imageStyle}></Image>
                </View>
                {/*右边*/}
                <View style={{flex:5}}>
                    {/*上*/}
                    <View style={styles.view1Style}>
                        <Text style={styles.titlesStyle} >{rowDate.storeName}</Text>
                        <Text style={styles.descrptionStyle} >{rowDate.distance}</Text>
                    </View>
                    {/*中*/}
                    <View style={styles.view2Style}>
                        <Text style={styles.descrptionStyle} >{rowDate.descrption}</Text>
                    </View>
                    {/*下*/}
                    <View style={styles.view3Style}>
                        <Text style={styles.priceStyle} >￥{rowDate.price}</Text>
                        <Text style={styles.descrptionStyle} > 门市价：￥{rowDate.marketPrice}</Text>
                        <Text style={styles.descrptionStyle} >已销售{rowDate.sales}</Text>
                    </View>
                </View>

            </View>
            </TouchableOpacity>
        )
    }
    /**** 处理点击事件*/
    onItemClick(rowDate){
        alert(rowDate.storeName);
    }
}

const styles=StyleSheet.create({
    viewOutStyle:{
        height:100,
        flexDirection:'row',
        /*垂直居中*/
        alignItems:'center',
        // backgroundColor:'red',
        borderBottomWidth:1,
        borderBottomColor:'#dddddd',
    },
    view1Style:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    view2Style:{
        marginTop:1,
        marginBottom:5
    },

    view3Style:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    imageStyle:{
        width:80,
        height:80,
        marginLeft:8,
        marginRight:8,
        borderRadius:2,
    },

    titlesStyle:{
        fontSize:14,

    },
    descrptionStyle:{
        color:'#9d9d9d',
        fontSize:12,
        paddingTop:3
    },
    priceStyle:{
        color:'#06C1AE',
        fontSize:15,
    }
})