import * as ThemeActionTypes from '../action-types/theme-action-types';
import light from '../constants/light';
import dark from '../constants/dark';

const initialState = {
   theme: dark
}

const THEMES = [
    light,
    dark
]

export default function theme(state = initialState, action) {
    switch (action.type) {
        case ThemeActionTypes.SET_THEME:
            return {
                ...state,
                theme: THEMES[action.theme],
            }
        default:
            return state;
    }
}


// https://blog.producthunt.com/product-hunt-mobile-theme-with-redux-in-react-native-5d49f70ffdf2