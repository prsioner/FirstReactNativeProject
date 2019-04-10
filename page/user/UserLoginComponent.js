/*
*说明：用户登录注册忘记密码等功能的页面跳转
* */

import React from 'react';
import {Button, View, Text, Alert, Image, StyleSheet, TextInput} from 'react-native';
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
                        placeholder="请输入账号"
                        onChangeText={(account) => this.setState({account})}
                    />
                    <TextInput
                        style={{height: 40}}
                        placeholder="请输入密码"
                        onChangeText={(password) => this.setState({password})}
                    />

                </View>


                <Button
                    style={{marginTop:20,height: 70,paddingLeft:20,paddingRight:20,textColor:'write'}}
                    onPress={() => {
                        Alert.alert((this.state.account==null||this.state.account=="" ||
                            this.state.password == null || this.state.password=="")? "请输入账号或者密码":"账号:"+this.state.account+'\n'+"密码："+this.state.password);

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

class ForgetPassword extends React.Component{
    static navigationOptions={
        title :'Forget Password'
    };

    render(){
        return (
            <View>
                <Text>忘记密码页面</Text>
            </View>
        )
    }
}

const RootStack = createStackNavigator(
    {
        Home: UserLoginComponent,
        RegisterAccount: RegisterAccount,
        ForgetPassword:ForgetPassword
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
    }

});
