/*
*说明：用户登录注册忘记密码等功能的页面跳转
* */

import React, {Component} from 'react';
import {Button, View, Text, Alert, Image, StyleSheet, TextInput,FlatList} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import loginComponentBack from './img/common_icon_arrow_back.png'
import weChatIcon from './img/common_share_logo_wechat.png'


class UserLoginComponent extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {account: '',password:''};
    }*/

    render() {

        return (
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                //justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                {/*返回键*/}
                <View >

                    <Image  source={loginComponentBack} style={styles.arrowback}/>

                </View>

                {/*登录和输入框---alignItems决定了子元素在次轴方向的排列方式（此样式设置在父元素上）*/}
                <View style={{marginTop:100,alignItems:'center'}}>

                    <Text style={styles.loginTextStyle}>登录</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="请输入账号：1"
                        onChangeText={(account) => this.setState({account})}
                    />
                    <TextInput
                        style={{height: 40}}
                        placeholder="请输入密码：1"
                        onChangeText={(password) => this.setState({password})}
                    />

                </View>


                <Button
                    style={{marginTop:20,height: 70,paddingLeft:20,paddingRight:20,textColor:'write'}}
                    onPress={() => {

                        //todo 如何友好的判断用户输入
                       /* if((this.state.account== null||this.state.account=="" ||
                                this.state.password == null || this.state.password=="")){
                            Alert.alert("请输入账号或者密码")
                        }else {
                            if(this.state.account ==1 && this.state.password==1){
                                this.props.navigation.navigate('MoviesPage')
                            }else {
                                Alert.alert("请输入正确的账号或者密码")
                            }
                        }*/

                        if(this.state.account ==1 && this.state.password==1){this.props.navigation.navigate('MoviesPage');}

                    }}
                    title="登录"
                />
                {/*第三方登录*/}
                <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}} >
                    <Button
                        style={styles.registerAccount}
                        onPress={() => {
                            this.props.navigation.navigate('RegisterAccount')
                        }}
                        title="注册账号"
                    />

                    <Button
                        style={styles.registerAccount}
                        onPress={() => {
                            this.props.navigation.navigate('ForgetPassword')
                        }}
                        title="忘记密码"
                    />

                </View>

                <View style={{marginTop:60,flexDirection:'column',alignItems:'center'}} >
                    <Text style={styles.registerAccount}>第三方登录</Text>

                    <Image source={weChatIcon} style={styles.weChatIconStyle}/>
                </View>


            </View>
        );
    }

    /**
     * 注册账号的点击事件
     */
    /*registerOnPress(){
        //Alert.alert("点击了注册账号")
        this.props.navigation.navigate('RegisterAccount')
    }
    forgetPassword(){
        this.props.navigation.navigate('ForgetPassword')
    }*/
}

class RegisterAccount extends React.Component {
    static navigationOptions={
        title :'Register Account'
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>账号注册</Text>
            </View>
        );
    }
}
var  REQUEST_URL ="https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";


class MainMoviesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }
    // componentDidMount是 React 组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不会再被调用
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    data: this.state.data.concat(responseData.movies),
                    loaded: true
                });
            });
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderMovie}
                style={styles.list}
                keyExtractor={item => item.id}
            />
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>Loading movies...</Text>
            </View>
        );
    }

    renderMovie({ item }) {
        // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
        // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: item.posters.thumbnail }}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.year}>{item.year}</Text>
                </View>
            </View>
        );
    }
}

/**
 * 实现一个计数器
 */
class ForgetPassword extends React.Component {
    
    static navigationOptions={
        title :'Forget Password'
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>忘记密码</Text>
            </View>
        );
    }
}


const RootStack = createStackNavigator(
    {
        Home: UserLoginComponent,
        RegisterAccount: RegisterAccount,
        ForgetPassword:ForgetPassword,
        MoviesPage:MainMoviesPage
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

const styles  = StyleSheet.create({
    arrowback:{
        width:50,
        height:50
    },
    loginTextStyle:{
        color:'black',
        fontWeight: 'bold',
        fontSize: 30,

    },
    registerAccount:{
        color:'blue',
        fontSize:16,
    },
    weChatIconStyle:{
        marginTop:20,
        width:50,
        height:50
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: "center"
    },
    year: {
        textAlign: "center"
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    list: {
        paddingTop: 20,
        backgroundColor: "#F5FCFF"
    }


});
