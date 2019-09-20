import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import * as ThemeActionTypes from '../action-types/theme-action-types';

import Button from '../ui-elements/button';
import { PRIMARY } from '../theme/colors';

class SettingsScreen extends Component {
    sendTheme = () => {
        let type = null
        const themeValue = this.props.theme.type

        if (themeValue === "light") {
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
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Button
                    OnPress={this.sendTheme}
                    Text={"TOGGLE THEME"}
                    Width={200}
                    BackgroundColor={PRIMARY}
                    TextColor={'white'}
                />

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