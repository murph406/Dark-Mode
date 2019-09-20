import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, ScrollView } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import { connect } from 'react-redux';

import SettingsScreen from '../screens/SettingsScreen';
import TrendingScreen from '../screens/TrendingScreen';
import { PRIMARY } from '../theme/colors';



const Tab = ({ tab, page, isTabActive, onPressHandler, onTabLayout, styles }) => {
    const { label } = tab;
    const style = {
        marginHorizontal: 20,
        paddingVertical: 10,
    };
    const containerStyle = {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: styles.backgroundColor,
        opacity: styles.opacity,
        transform: [{ scale: styles.opacity }],
    };
    const textStyle = {
        color: styles.textColor,
        fontWeight: '600',
    };
    return (
        <TouchableOpacity style={style} onPress={onPressHandler} onLayout={onTabLayout} key={page}>
            <Animated.View style={containerStyle}>
                <Animated.Text style={textStyle}>{label}</Animated.Text>
            </Animated.View>
        </TouchableOpacity>
    );
};


class HomeScreen extends Component {
    _scrollX = new Animated.Value(0);
    // 6 is a quantity of tabs
    interpolators = Array.from({ length: 6 }, (_, i) => i).map(idx => ({
        scale: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [1, 1.2, 1],
            extrapolate: 'clamp',
        }),
        opacity: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
        }),
        textColor: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: ['#000', '#000', '#000'],
        }),
        backgroundColor: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: ['grey', PRIMARY, 'grey'],
            extrapolate: 'clamp',
        }),
    }));

    componentDidMount() {
        console.log(this.props.theme)
    }
    render() {
        let theme = this.props.theme;
        return (
            <View style={{ backgroundColor: theme.background, paddingTop: 20, flex: 1 }}>
                <ScrollableTabView
                    renderTabBar={() => (
                        <TabBar
                            underlineColor={PRIMARY}
                            tabBarStyle={{ backgroundColor: theme.background }}
                            renderTab={(tab, page, isTabActive, onPressHandler, onTabLayout) => (
                                <Tab
                                    key={page}
                                    tab={tab}
                                    page={page}
                                    isTabActive={isTabActive}
                                    onPressHandler={onPressHandler}
                                    onTabLayout={onTabLayout}
                                    styles={this.interpolators[page]}
                                />
                            )}
                        />
                    )}
                    onScroll={(x) => this._scrollX.setValue(x)}
                >
                    <TrendingScreen tabLabel={{ label: "Hot", }} text="Go toggle Dark Theme" />
                    <TrendingScreen tabLabel={{ label: "Trending", }} text="Its Dope" />
                    <SettingsScreen tabLabel={{ label: "Settings", }} />
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        // color: this.props.theme.textColor,
        marginBottom: 5,
        fontSize: 28,
    },
});

var mapStateToProps = state => {
    return {
        theme: state.theme.theme,
    }
}

export default connect(mapStateToProps)(HomeScreen);