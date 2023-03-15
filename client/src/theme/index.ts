// for more info on how to structure this file, check out the docs:
// https://chakra-ui.com/docs/styled-system/customize-theme#scaling-out-your-project

import { extendTheme } from '@chakra-ui/react'


// Extend the theme to include custom colors, fonts, etc
const overrides = {
    colors: {
        brand: {
            900: '#1a365d', // only example, change as you like
            800: '#153e75', // only example, change as you like
            700: '#2a69ac', // only example, change as you like
          },
    },
}

export default extendTheme(overrides)
