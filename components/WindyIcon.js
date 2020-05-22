import React, { Component } from 'react'
import {
    Image,
    View,
    Text,
    Button
} from 'react-native'
import WindImage from '../assets/wind.png'

export default class Windyicon extends Component{
    render(){
        return ( <View>
        <Image source = {WindImage}
                style={ {width:200, height:200 , border: 1} }       
        >
            </Image>
        </View>
        )
    }
}