import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get("window");

const HeaderHeightPadding = (height > 800) ? height * .05 : height * .018 ;
const HeaderHeight = height * .13;

export { HeaderHeight, HeaderHeightPadding }