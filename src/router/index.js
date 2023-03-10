import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {SignIn, SplashScreen, StartStock, InputStock, FinishStock, Dashboard, AfterDashboard, ListClosing, FirstPage, DummyPage} from '../pages';


const Stack = createStackNavigator();

const Router = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown:false}}/>
        <Stack.Screen name="StartStock" component={StartStock} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="AfterDashboard" component={AfterDashboard} options={{headerShown:false}}/>
        <Stack.Screen name="InputStock" component={InputStock} options={{headerShown:false}}/>
        <Stack.Screen name="FinishStock" component={FinishStock} options={{headerShown:false}}/>
        <Stack.Screen name="ListClosing" component={ListClosing} options={{headerShown:false}}/>
        <Stack.Screen name="DummyPage" component={DummyPage} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}

export default Router;