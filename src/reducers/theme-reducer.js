import * as ThemeActionTypes from '../action-types/theme-action-types';
import light from '../theme/light';
import dark from '../theme/dark';

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
