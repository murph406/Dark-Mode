import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = props => (
    <TouchableOpacity
        style={[styles.container, { height: 50, width: props.Width - 32, backgroundColor: props.BackgroundColor}]}
        onPress={props.OnPress}>
        <Text style={ { textAlign: 'center', color:  props.TextColor }}>{props.Text}</Text>
    </TouchableOpacity>

)

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Button;