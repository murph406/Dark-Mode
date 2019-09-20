import { Dimensions } from 'react-native'
const { height } = Dimensions.get("window");

const HeaderHeightPadding = (height > 800) ? height * .05 : height * .018 ;
const HeaderHeight = height * .13;

export default {
    fontSizeHuge: 28,

    lineHeightHuge: 32,

    spacingSmall: 8,

    spacingLarge: 16,
    
    headerPadding: HeaderHeightPadding,

    headerHeight: HeaderHeight
  };
