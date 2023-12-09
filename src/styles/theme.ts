
import { baseTheme, extendTheme } from '@chakra-ui/react'
import { textStyles, fontSizes } from './typography'


const styles = {
  global: (props: any) => ({
    body: {
      webkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
      minHeight: 'auto',
      fontSize: 'lg',
    },
  }),
}

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const theme = extendTheme(
  {
    config: {
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
    breakpoints,

    styles,
    textStyles,
    fontSizes,
    fonts: {
      body: 'InterVariable, sans-serif',
      heading: 'InterVariable, sans-serif',
    },
    sizes: {
        ...baseTheme.sizes,
        container: breakpoints,
      },
// Container 사이즈
    components: {
      Container: {
        baseStyle: {
          maxW: 'container.lg',
        },
      },
  
      Menu: {
        baseStyle: {
          item: {
            fontSize: 'sm',
          },
        },
      },
   
    },
  },
  baseTheme
)

export default theme
