import { combineReducers } from 'redux';

import theme from './theme-reducer';

const MainReducer = combineReducers({
  theme,
})

export default MainReducer;