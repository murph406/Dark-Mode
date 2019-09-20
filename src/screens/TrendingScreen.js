import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class TrendingScreen extends Component {

    render() {
        let theme = this.props.theme;
        return (
            <ScrollView style={styles.container}>
                <Text style={[styles.welcome, {color: theme.textColor}]}>
                    {this.props.text}
                </Text>
            </ScrollView>
        )
    }
}

var mapStateToProps = state => {
    return {
        theme: state.theme.theme
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

var mapStateToProps = state => {
    return {
        theme: state.theme.theme,
    }
}

export default connect(mapStateToProps)(TrendingScreen);