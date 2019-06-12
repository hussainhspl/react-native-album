import React, { Component } from 'react';
import { Text, View } from 'react-native';

const style = {
    ViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#f8f8f8',
    },
    textStyle: {
        textTransform: 'capitalize',
        fontSize: 18,
    }
};
export default class Header extends Component {
    render() {
        const { ViewStyle, textStyle } = style;
        return (
            <View style={ViewStyle}>
            <Text style={textStyle}> {this.props.headerName} </Text>
            </View>
        );
    }
}

