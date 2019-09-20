import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as ThemeActionTypes from '../action-types/theme-action-types';

class SettingsScreen extends Component {
    sendTheme = () => {
        let type = null
        const themeValue = this.props.theme.type

        if (themeValue === "light" ) {
            type = 1
        } else {
            type = 0
        }
        this.props.dispatch({
            type: ThemeActionTypes.SET_THEME,
            theme: type
          })
    }

    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <TouchableOpacity
                    style={{height: 100, width: 200, borderRadius: 30, backgroundColor: '#00bcd4', alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => this.sendTheme()}
                >
                    <Text>TOGGLE THEME</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

var mapStateToProps = state => {
    return {
        theme: state.theme.theme
    }
  }

export default connect(mapStateToProps)(SettingsScreen);